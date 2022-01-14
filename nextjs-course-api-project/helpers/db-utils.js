import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://charly:TestCharly@cluster0.cesdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    // e.g. { _id: -1 }
    .sort(sort)
    .toArray();
  return documents;
}
