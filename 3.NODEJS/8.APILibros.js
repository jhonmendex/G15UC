import http from "node:http";
import { MongoClient } from "mongodb";
import url from "node:url";
import { ObjectId } from "mongodb";

//pull conection
const uri =
  "mongodb+srv://FS15:123@fs15cluster.qlofw.mongodb.net/?retryWrites=true&w=majority&appName=FS15CLUSTER";
const client = new MongoClient(uri);
const dbName = "libreria";

async function main() {
  await client.connect();
  console.log("conexion exitosa");
  const dataBaseConection = client.db(dbName);
  createServer(dataBaseConection);
}

function createServer(dataBaseConection) {
  //crear un servidor
  const servidor = http.createServer(async (req, res) => {
    const urlParse = url.parse(req.url);
    /*
      servidor: 127.0.0.1:3000
      version api: v0,v1
      eje path. api/v1/libro
                get: api/v1/libro
                   : api/v1/libro/idLibro
                   idLibro a buscar
                post:api/v1/libro 
                    :body -> datos del libro a crear
                put: api/v1/libro/idLibro
                    :body -> datos del libro a actualizar
                delete: api/v1/libro/idLibro
                      :id -> id del libro a eliminar
      */

    if (req.method == "GET" && urlParse.pathname == "/libro") {
      const books = await listBooks(dataBaseConection);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(books));
    } else if (req.method == "POST" && urlParse.pathname == "/libro") {
      let body = "";
      //eventos:receptor de la peticion
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      //evento de la respuesta
      req.on("end", async () => {
        const book = JSON.parse(body);
        console.log(book.autor_id);
        book.autor_id = new ObjectId(book.autor_id);
        book.editorial_id = new ObjectId(book.editorial_id);
        const query = await createBook(dataBaseConection, book);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(query));
      });
    } else if (
      req.method == "DELETE" &&
      urlParse.pathname.startsWith("/libro/")
    ) {
      const id = urlParse.pathname.split("/")[2];
      const query = await deleteBook(dataBaseConection, new ObjectId(id));
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(query));
    } else if (req.method == "PUT" && urlParse.pathname.startsWith("/libro/")) {
      const id = urlParse.pathname.split("/")[2];
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", async () => {
        const book = JSON.parse(body);
        book.autor_id = new ObjectId(book.autor_id);
        book.editorial_id = new ObjectId(book.editorial_id);
        const query = await updateBook(
          dataBaseConection,
          new ObjectId(id),
          book
        );
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(query));
      });
    }
  });
  //puerto de conexion
  const puerto = 3000;
  //escuchar el servidor
  servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
  });
}

async function listBooks(dataBaseConection) {
  const collection = dataBaseConection.collection("libro");
  const books = await collection.find({}).toArray();
  return books;
}

async function createBook(dataBaseConection, book) {
  const collection = dataBaseConection.collection("libro");
  const query = await collection.insertOne(book);
  return query;
}

function deleteBook(dataBaseConection, id) {
  const collection = dataBaseConection.collection("libro");
  const query = collection.deleteOne({ _id: id });
  return query;
}

async function updateBook(dataBaseConection, id, body) {
  const collection = dataBaseConection.collection("libro");
  const query = await collection.updateOne({ _id: id }, { $set: body });
  return query;
}
main().catch(console.error);
