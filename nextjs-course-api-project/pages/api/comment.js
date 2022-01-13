import fs from "fs";
import path from "path";

export default function handler(request, response) {
  if (request.method === "POST") {
    const email = request.body.email;
    const name = request.body.name;
    const text = request.body.text;
    const eventId = request.body.eventId;

    const newComment = {
      id: new Date().toISOString(),
      email: email,
      name: name,
      text: text,
      eventId: eventId
    };
    const filePath = path.join(process.cwd(), "data", "comment.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));
    response.status(201).json({ message: "success", comment: newComment });
  } else {
    response
      .status(200)
      .json({ message: "successful request but only POST allowed so far" });
  }
}
