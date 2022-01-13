import fs from "fs";
import path from "path";

export default function handler(request, response) {
  const eventId = request.query.eventId;

  if (request.method === "POST") {
    const { email, name, text } = request.body;
    const newComment = {
      id: new Date().toISOString(),
      email: email,
      name: name,
      text: text
    };
    const filePath = path.join(process.cwd(), "data", "comments.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));
    response.status(201).json({ message: "Added comment", comment: newComment });
  }
  if (request.method === "GET"){
    const filePath = path.join(process.cwd(), "data", "comments.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    response.status(200).json({ comments: data });

  } else {
      console.log("Valid request but only POST & GET atm")
  }
}
