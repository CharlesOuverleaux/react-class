import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First OS API</title>
        <meta name="description" content="An OpenSea API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OpenSea API
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Contact us</p>
      </footer>
    </div>
  )
}
