import { connectDatabase, insertDocument } from "../../../helpers/db-utils";

export default async function handler(request, response) {
  const eventId = request.query.eventId;

  const client = await connectDatabase();

  if (request.method === "POST") {
    const { email, name, text } = request.body;
    const newComment = {
      email: email,
      name: name,
      text: text,
      eventId: eventId,
    };
    const result = await insertDocument(client, "comments", newComment);
    newComment.id = result.insertedId;

    response
      .status(201)
      .json({ message: "Added comment", comment: newComment });
  }
  if (request.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    response.status(200).json({ comments: documents });
  }
  client.close();
}
