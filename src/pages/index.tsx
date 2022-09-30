import type { NextPage } from "next";
import Head from "next/head";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  const style = {
    minHeight: "100vh",
    padding: "4rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  };
  const container = {
    padding: "0 2rem",
  };
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
      </BaseLayout>
    </>
  );
};

export default Home;
