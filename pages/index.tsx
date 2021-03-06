import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div
      className="ms-Grid" 
      dir="ltr"
    >
      <Head>
        <title>HOME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      </main>
      <Footer />
    </div>
  )
}

export default Home
