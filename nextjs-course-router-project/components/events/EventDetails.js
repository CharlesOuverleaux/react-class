import Link from "next/link";

export default function EventDetails(props) {
  const {
    id,
    image,
    title,
    date,
    location,
    description,
    userPicture,
    userName,
  } = props.event;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <div className="shadow-xl my-4 py-2 rounded-lg bg-white">
      <div className="EventBanner">
        <img src={image} alt={title} />
      </div>
      <div className="flex justify-center relative mb-10">
        <img
          className="object-cover h-20 w-20 rounded-full shadow-2xl absolute -top-12"
          src={userPicture}
          alt="userPicture"
        />
      </div>
      <div className="EventContent p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="font-bold">Organized by {userName}</div>
        <div className="text-slate-500">
          Taking place in {formattedAddress} on {readableDate}
        </div>
        <p className="text-slate-600 mt-2">{description}</p>
        <div className="flex justify-center">
          <Link href="/">
            <a className="mt-4 bg-blue-500 shadow-lg rounded-lg shadow-blue-500/50 text-white p-4">
              Go back
            </a>
          </Link>
        </div>
      </div>
    </div>
  );}
