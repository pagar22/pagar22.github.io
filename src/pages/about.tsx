import type { NextPage } from "next";
import { BaseLayout } from "../layouts/BaseLayout";

const About: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <h1 className={"title"}>
          <span className={"text-gradient"}>Shuush,</span> there&apos;s more
          coming soon.
        </h1>
      </main>
    </BaseLayout>
  );
};

export default About;
