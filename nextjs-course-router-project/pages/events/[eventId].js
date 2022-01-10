import EventDetails from "../../components/events/EventDetails";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import Head from 'next/head';

export default function EventIdPage(props) {
  const event = props.event;

  // in case event does not exist
  if (!event) {
    return <p>No events found</p>
  }
  return (
    <div>
      <Head>
        <title>NFT event details: {event.title}</title>
        <meta
          name="description"
          content="NFT event"
        />
      </Head>
      <EventDetails event={event} />
    </div>
  );
}

// because its a dynamic page, there could be an inf amount of pages to load
// we need to tell next which ones to load, we use getStaticPaths to choose which to pre-generate
// Reminder: fallback needed to let next know if there are more ids that will come
// here false, as we load all events (no new ones possible)

export async function getStaticPaths(){
  const events = await getAllEvents();
  const paths = events.map(event => ({params: {eventId: event.id}}));

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps(context){
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event
    },
    revalidate: 30
  }
}
