import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aaryan Pagar</title>
        <link rel="icon" type="image/x-icon" href="ramen.ico" />
        <meta name="description" content="Aaryan Pagar's Personal Portfolio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I&apos;m{" "}
          <span className={"text-indigo-500"}>
            <a
              href="https://www.linkedin.com/in/pagar22/"
              target={"_blank"}
              rel="noreferrer"
            >
              Aaryan
            </a>
          </span>
          !
        </h1>
      </main>
    </div>
  );
};

export default Home;
