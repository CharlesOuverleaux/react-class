import { buildFeedbackPath, extractFeedback} from '../api/feedback';

export default function FeedbackPage(props){
  return (
    <div>
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(){
  // thanks to this we do not need to use fetch();
  // because we use our internal api,
  // we leverage the fact that it is running on the same computer

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data
    }
  }
}
