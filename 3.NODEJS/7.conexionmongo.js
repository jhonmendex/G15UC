import { MongoClient } from "mongodb";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function run() {
  const uri =
    "mongodb+srv://FS15:123@fs15cluster.qlofw.mongodb.net/?retryWrites=true&w=majority&appName=FS15CLUSTER";
  const client = new MongoClient(uri);
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // console.log(
    // "Pinged your deployment. You successfully connected to MongoDB!"
    //);

    await listarDatos(client);
  } catch {
    console.log("conexion fallida");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("conexion cerrada");
  }
}
run().catch(console.dir);

async function listarDatos(client) {
  const db = client.db("libreria");
  const coleccion = db.collection("libro");
  const resultado = await coleccion.find({}).toArray();
  console.log("libros", resultado);
}
