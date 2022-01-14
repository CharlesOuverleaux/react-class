import { connectDatabase, insertDocument } from "../../helpers/db-utils";

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
