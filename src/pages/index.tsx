import Head from "next/head";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import About from "./About";
import Loading from "./Loading";

export default function Index() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Jeromy Kho [Software Engineer]</title>
      </Head>

      {isLoading ? (
        <Loading
          onAnimationComplete={() => {
            setIsLoading(false);
          }}
          duration={2}
        />
      ) : (
        <MainLayout>
          <About />
          {/* <About />
          <About />
          <About /> */}
        </MainLayout>
      )}
    </>
  );
}
