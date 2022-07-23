import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import About from "./About";

export default function Index() {
  return (
    <>
      <Head>
        <title>Jeromy Kho [Software Engineer]</title>
      </Head>
      <MainLayout>
        <About />
        <About />
      </MainLayout>
    </>
  );
}
