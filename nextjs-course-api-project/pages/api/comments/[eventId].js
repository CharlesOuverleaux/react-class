import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utils";

export default async function handler(request, response) {
  const eventId = request.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    response.status(500).json({ message: "Database connection failed" });
    // in case of error we want to stop the code there
    return;
  }

  if (request.method === "POST") {
    const { email, name, text } = request.body;
    const newComment = {
      email: email,
      name: name,
      text: text,
      eventId: eventId,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      response
        .status(201)
        .json({ message: "Added comment", comment: newComment });
    } catch (error) {
      response.status(500).json({ message: "Database insert failed" });
    }
  }
  if (request.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      response.status(200).json({ comments: documents });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Database getting all documents failed" });
    }
  }
  client.close();
}
