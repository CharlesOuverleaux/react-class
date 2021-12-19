import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function HomePage(){
  const featuredEvents = getFeaturedEvents();

  return(
    <div>
      <h1>HomePage</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}
