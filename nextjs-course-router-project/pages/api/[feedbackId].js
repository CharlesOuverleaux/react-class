import { buildFeedbackPath, extractFeedback } from './feedback';

export default function handler(request, response){
  const feedbackId = request.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const selectedFeedback = data.find(feedback => feedback.id === feedbackId);

  response.status(200).json({feedback: selectedFeedback})
}
