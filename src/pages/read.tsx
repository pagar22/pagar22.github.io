import type { NextPage } from "next";
import { BookList } from "../components/features/BookList";
import { QuotesList } from "../components/features/QuotesList";
import { BaseLayout } from "../layouts/BaseLayout";

const Read: NextPage = () => {
  return (
    <BaseLayout>
      <main className={"main"}>
        <BookList />
        <QuotesList />
      </main>
    </BaseLayout>
  );
};

export default Read;
