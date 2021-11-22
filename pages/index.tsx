import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Caurosal2 from "../Components/Caurosal2"
import Details from '../Components/Details'
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Caurosal2 />
      <Details/>
    
    </div>
  )
}

export default Home
