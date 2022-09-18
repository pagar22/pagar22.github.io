import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}><span className={"text-indigo-500"}>Shuuuush,</span> there's more coming soon.</h1>
    </main>
  )
}

export default Home
