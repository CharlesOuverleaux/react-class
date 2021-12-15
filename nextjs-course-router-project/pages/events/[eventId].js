import { useRouter } from "next/router";

export default function EventIdPage() {
  const router = useRouter();
  return (
    <div>
      <h1>EventIdPage: {router.query.eventId}</h1>
    </div>
  );
}
