import Link from "next/link";

export default function EventItem(props) {
  const { id, image, title, date, location, description, userPicture, userName} = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const explorePath = `events/${id}`;
  return (
    <li key={id}>
      <div className="flex">
        <img
          className="object-cover h-20 w-20 p-2 rounded-full"
          src={userPicture}
          alt="userPicture"
        />
        <div className="UserInfo p-2">
          <div className="font-bold">{userName}</div>
          <div className="text-slate-500">{readableDate}</div>
        </div>
      </div>
      <div className="EventBanner">
        <img src={image} alt={title} className="" />
      </div>
      <div className="EventContent">
        <h2>{title}</h2>
        <p>{readableDate}</p>
        <p>{description}</p>
        <Link href="/">
          <a>Explore event</a>
        </Link>
      </div>
    </li>
  );
}
