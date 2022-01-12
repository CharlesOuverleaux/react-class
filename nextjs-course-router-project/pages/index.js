import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import Head from 'next/head';
import { useRef } from "react";

export default function HomePage(props){
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

  return (
    <div>
      <Head>
        <title>NFT featured events</title>
        <meta
          name="description"
          content="Find all NFT related events in your city"
        />
      </Head>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea type="text" row="5" id="feedback" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send</button>
      </form>
      <EventList items={props.events} />
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
