import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>AEROFOIL</title>
        <meta name="description" content="AEROFOIL Simple prediction for aerodynamic coefficient of airfoil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to AEROFOIL
        </h1>

        <p>
          Web-based applications to help users in predicting aerodynamic coefficients of airfoils
        </p>
      </main>
    </div>
  )
}
