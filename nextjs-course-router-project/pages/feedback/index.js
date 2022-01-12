import { buildFeedbackPath, extractFeedback} from '../api/feedback';
import { useState } from 'react';

export default function FeedbackPage(props){
  const [ feedbackData, setFeedbackData] = useState();
  function loadFeedbackHandler(id){
    fetch(`/api/${id}`).then(response => response.json()).then(data => {
      setFeedbackData(data.feedback);
    });
  }

  return (
    <div>
      { feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            {/* bind allows to preconfigure the function so it does not execute
            the function yet, but it preconfigures it for future exections
            and to preconfigure values that we use , null is for the keyword this */}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show details</button>
          </li>
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
