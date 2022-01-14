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

export default async function handler(request, response) {
  if (request.method === "POST") {
    const userEmail = request.body.email;

    const client = await connectDatabase();
    await insertDocument(client, "emails", {email: userEmail})

    client.close();

    response.status(201).json({ message: "Signed up successfully", email: userEmail });
  }
}
