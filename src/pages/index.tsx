import { Box, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import Scrollbar from "../components/Scrollbar";
import { ScrollFrame } from "../entities/types";
import MainLayout from "../layouts/MainLayout";
import Snowfall from "../lib/react-snowfall/src";
import About from "./About";
import Home from "./Home";
import Loading from "./Loading";

export default function Index() {
  const [_, setScrollFrame] = useState<ScrollFrame>({
    clientHeight: 0,
    clientWidth: 0,
    left: 0,
    scrollHeight: 0,
    scrollLeft: 0,
    scrollTop: 0,
    scrollWidth: 0,
    top: 0,
  });
  const [showShadow, setShowShadow] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
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
        <Scrollbar
          onScrollFrame={(value: ScrollFrame) => {
            setScrollFrame(() => {
              setShowShadow(value.scrollTop > 0);
              return value;
            });
          }}
        >
          <MainLayout showShadow={showShadow}>
            <Snowfall
              style={{
                height: "100%",
                width: "100vw",
                zIndex: 11,
                position: "absolute",
              }}
              snowflakeCount={isLargerThan1280 ? 50 : 25}
            />
            <Box height="100vh">
              <Home />
            </Box>
            <About />
          </MainLayout>
        </Scrollbar>
      )}
    </>
  );
}
