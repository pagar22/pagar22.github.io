import type { NextPage } from "next";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <h1 className={"title"}>
          <span className={"text-gradient"}>Hoppala,</span> there&apos;s more
          coming soon.
        </h1>
      </main>
    </BaseLayout>
  );
};

export default Home;
