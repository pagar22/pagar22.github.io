import { NextPage } from "next";
import { BaseLayout } from "../layouts/BaseLayout";

const Resume: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <iframe
          className={"w-3/5 h-5/6 -lg:hidden"}
          src="/AaryanPagar.pdf#toolbar=0"
        />
        <h1 className={"text-3xl text-center lg:hidden"}>
          View my resume{" "}
          <span className={"text-gradient font-semibold"}>
            <a href={"/AaryanPagar.pdf"} target={"_blank"} rel={"noreferrer"}>
              here
            </a>
          </span>
          !
        </h1>
      </main>
    </BaseLayout>
  );
};

export default Resume;
