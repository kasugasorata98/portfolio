import Head from "next/head";
import Scrollbar from "../components/Scrollbar";
import MainLayout from "../layouts/MainLayout";
import About from "./About";

export default function Index() {
  return (
    <Scrollbar>
      <Head>
        <title>Jeromy Kho [Software Engineer]</title>
      </Head>
      <MainLayout>
        <About />
      </MainLayout>
    </Scrollbar>
  );
}
