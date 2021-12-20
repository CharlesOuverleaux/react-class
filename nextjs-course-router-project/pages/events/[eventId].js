import { useRouter } from "next/router";
import EventDetails from "../../components/events/EventDetails";
import { getEventById } from "../../dummy-data";

export default function EventIdPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  // in case event does not exist
  if (!event) {
    return <p>Sorry, no event found</p>
  }
  return (
    <div>
      <EventDetails event={event}/>
    </div>
  );
}
