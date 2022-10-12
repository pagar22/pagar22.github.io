import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Socials } from "../components/features/Socials";
import { TextLoop } from "../components/features/TextLoop";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  const [hindi, setHindi] = useState(true);
  const toggleHindi = () => setHindi(!hindi);
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
            <span
              className={"cursor-pointer text-gradient"}
              onClick={toggleHindi}
            >
              {hindi ? `आर्यन ` : "Aaryan"}
            </span>
            !
          </h1>
          <TextLoop
            sentences={[
              "I push buttons.",
              "I get my PRs declined.",
              "I push buttons again.",
            ]}
          />
          <Socials />
        </main>
      </BaseLayout>
    </>
  );
};

export default Home;
