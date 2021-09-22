import React from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export async function getStaticProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return {
    props: {data}
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
        <ol className='List'>
        {data.map(i => <li key={i.id}>{i.title}</li>)}
        </ol>
    </div>
  )
}
