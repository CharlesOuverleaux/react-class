import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";

export default function EventsPage(props) {
  const { events } = props;
  const router = useRouter();
  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps(){
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
