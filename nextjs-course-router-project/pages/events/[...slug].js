import { useRouter } from "next/router";

export default function EventSlugPage() {
  const router = useRouter();
  const inputs = router.query.slug
  return (
    <div>
      <ul>
        {inputs &&
          inputs.map(input => <li key={input}>{input}</li>)
        }
      </ul>
    </div>
  );
}
