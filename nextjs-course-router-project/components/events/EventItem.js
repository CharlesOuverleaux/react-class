import Link from "next/link";

export default function EventItem(props) {
  const { id, image, title, date, location } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const explorePath = `events/${id}`;
  return (
    <li key={id}>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={explorePath}>Explore event</Link>
      </div>
    </li>
  );
}
