import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AEROFOIL</title>
        <meta name="description" content="AEROFOIL Simple prediction for aerodynamic coefficient of airfoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to AEROFOIL
        </h1>

        <p className={styles.description}>
          Web-based applications to help users in predicting aerodynamic coefficients of airfoils
        </p>
      </main>
    </div>
  )
}
