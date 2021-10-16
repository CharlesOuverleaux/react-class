import React from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Image from 'next/image'

export async function getStaticProps() {
  const res = await axios.get('https://api.opensea.io/api/v1/assets?order_by=sale_count&order_direction=desc&offset=0&limit=20');
  const { data } = res;
  console.log(data);
  return {
    props: {data}
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <h1>Top 20 NFT&apos;s by sales count</h1>
        <ol className='List'>
        {data.assets.map(i =>
          <li key={i.id}>
            {i.name} - {i.description}
          </li>)}
        </ol>
    </div>
  )
}
