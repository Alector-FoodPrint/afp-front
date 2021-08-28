import "../styles/globals.css"
import Head from "next/head"
// import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alector FoodPrint</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
