import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>All events</h1>
      <EventList items={events} />
    </div>
  );
}
