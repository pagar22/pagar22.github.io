import { BaseLayout } from "../layouts/BaseLayout";

export default function custom404() {
  return (
    <BaseLayout>
      <main className={"main text-xl text-center"}>
        <p>404</p>
        <br />
        <p className={"text-7xl"}>🥴</p>
        <br />
        <p>
          Going Somwehere? Let me take you{" "}
          <a className={"text-gradient font-bold"} href={"/"}>
            home
          </a>
          .
        </p>
      </main>
    </BaseLayout>
  );
}
