import { Box, useMediaQuery } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Scrollbar from "../components/Scrollbar";
import { PageReference, ScrollFrame } from "../entities/types";
import MainLayout from "../layouts/MainLayout";
import Snowfall from "../lib/react-snowfall/src";
import About from "./about2";
import Home from "./home2";
import Loading from "./loading2";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

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
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const scrollRef = useRef<Scrollbars>(null);
  const pageReference: PageReference = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
  };

  return (
    <>
      {isLoading ? (
        <Loading
          onAnimationComplete={() => {
            setIsLoading(false);
          }}
          duration={2}
        />
      ) : (
        <Scrollbar
          scrollRef={scrollRef}
          onScrollFrame={(value: ScrollFrame) => {
            setScrollFrame((prevScrollFrame) => {
              setShowShadow(value.scrollTop > 0);
              if (value.scrollTop > prevScrollFrame.scrollTop)
                setShowHeader(false);
              else setShowHeader(true);
              return value;
            });
          }}
        >
          <MainLayout
            scrollRef={scrollRef}
            showHeader={showHeader}
            showShadow={showShadow}
            pageReference={pageReference}
          >
            <Snowfall
              style={{
                height: "100%",
                width: "100vw",
                zIndex: 11,
                position: "absolute",
              }}
              snowflakeCount={isLargerThan1280 ? 50 : 25}
            />
            <Box ref={pageReference.home} height="100vh">
              <Home />
            </Box>

            <About />
            <Box ref={pageReference.about}>
              <About />
            </Box>
            <About />
            <About />
          </MainLayout>
        </Scrollbar>
      )}
    </>
  );
}
