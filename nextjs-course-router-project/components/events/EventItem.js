import Link from "next/link";
import Image from 'next/image';

export default function EventItem(props) {
  const { id, image, title, date, location, description, userPicture, userName} = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const explorePath = `/events/${id}`;
  return (
    <li key={id} className="shadow-xl my-4 py-2 rounded-lg bg-white">
      <div className="flex p-2">
        <Image
          className="object-cover h-20 w-20 rounded-full shadow-md bg-white"
          src={userPicture}
          alt="userPicture"
          width={80}
          height={80}
        />
        <div className="UserInfo p-2">
          <div className="font-bold">{userName}</div>
          <div className="text-slate-500">
            {formattedAddress} on {readableDate}
          </div>
        </div>
      </div>
      <div className="EventBanner">
        <Image
          src={image}
          alt={title}
          width={465}
          height={560}
          layout="responsive"
        />
      </div>
      <div className="EventContent p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <div className="flex justify-center">
          <Link href={explorePath}>
            <a className="mt-4 bg-blue-500 shadow-lg rounded-lg shadow-blue-500/50 text-white p-4">
              Explore event
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}
