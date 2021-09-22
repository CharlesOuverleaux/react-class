import Link from 'next/link';

const Index = () => {
  return (
  <div>
    <h1>Index Page!</h1>
    <Link href='/about'><a>about</a></Link>
  </div>
  )
};

export default Index;
