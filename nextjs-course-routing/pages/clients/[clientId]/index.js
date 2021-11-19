import { useRouter } from "next/router";

export default function ClientsDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Client Detail Page: {router.query.clientId}</h1>
    </div>
  );
}
