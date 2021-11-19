import { useRouter } from "next/router";

export default function ClientsDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>About Detail Page: {router.query.clientId}</h1>
    </div>
  );
}
