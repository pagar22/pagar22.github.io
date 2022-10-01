import type { NextPage } from "next";
import Head from "next/head";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aaryan Pagar</title>
        <link rel="icon" type="image/x-icon" href="ramen.ico" />
        <meta name="description" content="Aaryan Pagar's Personal Portfolio" />
      </Head>
      <BaseLayout>
        <main className={"main"}>
          <h1 className={"title"}>
            Hello, I&apos;m{" "}
            <span className={"text-gradient"}>
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
      </BaseLayout>
    </>
  );
};

export default Home;
