import { MongoClient } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const userEmail = request.body.email;
    const client = await MongoClient.connect(
      "mongodb+srv://charly:TestCharly@cluster0.cesdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    response.status(201).json({ message: "success", email: userEmail });
  } else {
    response
      .status(200)
      .json({ message: "successful request but only put allowed so far" });
  }
}
