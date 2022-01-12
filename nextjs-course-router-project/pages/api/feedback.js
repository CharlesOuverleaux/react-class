import fs from 'fs';
import path from 'path';

function handler(request, response){
  if(request.method === 'POST'){
    const email = request.body.email;
    const feedbackText = request.body.text;

    const newFeedback = {
      // not perfect as two users could send it at the exact same time
      // next time use a UI e.g. uuid or self-made
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // absolute path to the data folder and feedback file
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    // we read the data
    const fileData = fs.readFileSync(filePath);
    // convert the data into a JS object
    const data = JSON.parse(fileData);
    // we add our data into the array
    data.push(newFeedback);
    // we add everything in the file again
    fs.writeFileSync(filePath, JSON.stringify(data));
    // sends back a success response with a JSON object with two properties
    response.status(201).json({message: "success", feedback: newFeedback});
  } else {
    response.status(200).json({ message: "This works" });
  }
}
export default handler;
