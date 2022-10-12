import type { NextPage } from "next";
import { FlipCard } from "../components/theme/FlipCard";
import { BaseLayout } from "../layouts/BaseLayout";

const Jokes: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <FlipCard
          childrenFront={
            <h1 className={"text-2xl -md:text-xl"}>Flip to reveal a joke.</h1>
          }
          childrenBack={
            <div
              className={"flex flex-col justify-between items-center space-y-4"}
            >
              <img
                className={"w-56 rounded-xl"}
                width={200}
                src={"/me.png"}
                alt={"Me!"}
              />
              <p className={"text-center"}>
                Jk I have extreme self-confidence :&apos;)
              </p>
            </div>
          }
        />
      </main>
    </BaseLayout>
  );
};

export default Jokes;
