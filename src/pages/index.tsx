import { Box, useMediaQuery, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "../components/Scrollbar";
import { PageReference, ScrollFrame } from "../entities/types";
import MainLayout from "../layouts/MainLayout";
import Snowfall from "../lib/react-snowfall/src";
import About from "./about";
import Home from "./home";
import Loading from "./loading";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Util from "../util";
import EmploymentHistory from "./employment-history";
import Skills from "./skills";
import Dialog from "../components/Dialog";

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
    work: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  const toast = useToast();

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
              if (value.scrollTop === 0) setShowHeader(true);
              else if (value.scrollTop > prevScrollFrame.scrollTop)
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
            <Box ref={pageReference.home}>
              <Home />
            </Box>
            <Box ref={pageReference.about}>
              <About />
            </Box>
            <Box ref={pageReference.work}>
              <EmploymentHistory />
            </Box>
            <Box ref={pageReference.skills}>
              <Skills />
            </Box>
          </MainLayout>
        </Scrollbar>
      )}
    </>
  );
}
