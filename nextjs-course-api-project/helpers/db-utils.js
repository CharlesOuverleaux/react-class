import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://charly:TestCharly@cluster0.cesdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return client;
}

async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export { connectDatabase, insertDocument };
