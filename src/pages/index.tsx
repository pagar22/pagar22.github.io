import type { NextPage } from "next";
import Head from "next/head";
import { Socials } from "../components/features/Socials";
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
            Hello, I&apos;m <span className={"text-gradient"}>Aaryan</span>!
          </h1>
          <p className="text-lg mt-4">I push buttons.</p>
          <Socials />
        </main>
      </BaseLayout>
    </>
  );
};

export default Home;
