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

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      response.status(500).json({ message: "Database connection failed" });
      // in case of error we want to stop the code there
      return;
    }

    try {
      await insertDocument(client, "emails", { email: userEmail });
      client.close();
    } catch (error) {
      response.status(500).json({ message: "Database insert failed" });
      // in case of error we want to stop the code there
      return;
    }

    response
      .status(201)
      .json({ message: "Signed up successfully", email: userEmail });
  }
}
