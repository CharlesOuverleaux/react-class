import fs from 'fs';
import path from 'path';

export default function handler(request, response){
  if(request.method === 'POST'){
    const email = request.body.email;
    const newEmail = {
      id: new Date().toISOString(),
      email: email,
    };
    const filePath = path.join(process.cwd(), "data", "email.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newEmail);
    fs.writeFileSync(filePath, JSON.stringify(data));
    response.status(201).json({message: 'success', email: newEmail });
  } else {
    response.status(200).json({message: 'successful request but only put allowed so far'})
  }
}
