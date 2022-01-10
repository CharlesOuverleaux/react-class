import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import Head from 'next/head';

export default function HomePage(props){
  return (
    <div>
      <Head>
        <title>NFT featured events</title>
        <meta name='description' content='Find all NFT related events in your city'/>
      </Head>
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
