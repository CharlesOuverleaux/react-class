import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function HomePage(){
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="bg-slate-300">
      <h1 className="text-2xl font-bold">Next Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
