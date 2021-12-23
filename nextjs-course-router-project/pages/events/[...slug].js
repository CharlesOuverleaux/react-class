import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

export default function EventSlugPage() {
  const router = useRouter();
  const filterData = router.query.slug

  if (!filterData) {
    return <p className="content-center">Loading ... </p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  // + converts string to data
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1) {
    return <p>Invalid filter, please use the input fields</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if(!filteredEvents || filteredEvents.length === 0){
    return <p>No events found, please adapt your search</p>
  }
  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  );
}
