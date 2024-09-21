import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class DataAccess {
  constructor() {
    if (!DataAccess.instance) {
      this.client = new MongoClient(process.env.DATA_BASE_URL);
      this.db = this.client.db(process.env.DATA_BASE_NAME);
      DataAccess.instance = this;
      console.log("Connected successfully to server");
    }
    return DataAccess.instance;
  }

  async connect() {
    try {
      this.connection = await this.client.connect();
      console.log("connected database");
    } catch (error) {
      console.log("error", error);
    }
  }

  async findAll(collectionName) {
    const collection = this.db.collection(collectionName);
    const data = await collection.find().toArray();
    return data;
  }

  async findOne(collectionName, id) {
    const collection = this.db.collection(collectionName);
    const data = await collection.find({ _id: new ObjectId(id) }).toArray();
    return data;
  }

  async createOne(collectionName, body) {
    const collection = this.db.collection(collectionName);
    const data = await collection.insertOne(body);
    return data;
  }

  async updateOne(collectionName, id, body) {
    const collection = this.db.collection(collectionName);
    const data = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );
    return data;
  }

  async deleteOne(collectionName, id) {
    const collection = this.db.collection(collectionName);
    const data = await collection.deleteOne({ _id: new ObjectId(id) });
    return data;
  }

  async findByField(collectionName, field, value) {
    const collection = this.db.collection(collectionName);
    const data = await collection.findOne({ [field]: value });
    return data;
  }
}

export default DataAccess;
