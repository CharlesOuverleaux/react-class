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
    <li key={id} className="shadow-xl my-4 p-2 rounded-lg bg-white">
      <div className="flex">
        <img
          className="object-cover h-20 w-20 p-2 rounded-full"
          src={userPicture}
          alt="userPicture"
        />
        <div className="UserInfo p-2">
          <div className="font-bold">{userName}</div>
          <div className="text-slate-500">
            {formattedAddress} on {readableDate}
          </div>
        </div>
      </div>
      <div className="EventBanner">
        <img src={image} alt={title} />
      </div>
      <div className="EventContent p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="mt-4 bg-blue-500 shadow-lg rounded-lg shadow-blue-500/50 text-white p-4">
              Explore event
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}
