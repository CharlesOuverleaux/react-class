import { useRouter } from 'next/router';

export default function PortefolioProjectPage(){
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return(
    <div>
      <h1>Portefolio Project Page</h1>
      <p>This is project: {router.query.portefolioId}</p>
    </div>
  )
}
