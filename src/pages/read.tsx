import type { NextPage } from "next";
import { BookList } from "../components/features/BookList";
import { BaseLayout } from "../layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <BookList />
      </main>
    </BaseLayout>
  );
};

export default Home;
