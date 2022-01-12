import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import Head from 'next/head';
import { useRef, useState } from "react";

export default function HomePage(props){
  const [ feedbackItems, setFeedbackItems ] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const requestBody = { email: enteredEmail, text: enteredFeedback }
    // fetch(url, configuration(choose the method, add the data in body as JSON,
    // headers are there to inform the backend what will come through the api request ))
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler(){
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <Head>
        <title>NFT featured events</title>
        <meta
          name="description"
          content="Find all NFT related events in your city"
        />
      </Head>
      <EventList items={props.events} />
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            type="text"
            row="5"
            id="feedback"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button>Send</button>
      </form>
      <button onClick={loadFeedbackHandler}>Load Feedbacks</button>
      <ul>
        {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
