import type { NextPage } from "next";
import { FlipCard } from "../components/theme/FlipCard";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <FlipCard
          childrenFront={
            <h1 className="text-2xl -md:text-xl">Flip to reveal a joke.</h1>
          }
          childrenBack={
            <div className="flex flex-col justify-between items-center space-y-4">
              <img
                className="w-56 rounded-xl"
                width={200}
                src="/me.png"
                alt="Me!"
              />
              <p className="text-center">
                Kidding I have extreme self-confidence :')
              </p>
            </div>
          }
        />
      </main>
    </BaseLayout>
  );
};

export default Home;
