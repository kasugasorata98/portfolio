import {
  Box,
  Flex,
  HStack,
  VStack,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import Snowfall from "../../lib/react-snowfall/lib/Snowfall";
import ChakraBox from "../../components/ChakraBox";
import Header from "../../components/Header";
import Scrollbar from "../../components/Scrollbar";
import { ScrollFrame } from "../../entities/types";
import colors from "../../styles/colors";

const MainLayout: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
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
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Scrollbar
      onScrollFrame={(value: ScrollFrame) => {
        setScrollFrame(() => {
          setShowShadow(value.scrollTop > 0);
          return value;
        });
      }}
    >
      <Snowfall
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: 11,
          position: "absolute",
        }}
        snowflakeCount={isLargerThan1280 ? 50 : 25}
      />
      <Flex bg={colors.background}>
        <VStack position={"relative"}>
          <Box position={"fixed"} zIndex={10} alignSelf={"stretch"}>
            <Header showShadow={showShadow} />
          </Box>
          <HStack>
            <Box width={{ base: 0, md: 100 }}>
              <VStack
                position={{ base: "unset", md: "fixed" }}
                display={{ base: "none", md: "flex" }}
                bottom={0}
                left={0}
                width={100}
                alignSelf={"flex-end"}
                justify={"center"}
              >
                <ChakraBox
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                    delay: 2,
                    duration: 0.5,
                  }}
                >
                  <Divider height={"28"} orientation="vertical" />
                </ChakraBox>
              </VStack>
            </Box>
            <Box>{children}</Box>
            <Box width={{ base: 0, md: 100 }}>
              <VStack
                position={{ base: "unset", md: "fixed" }}
                display={{ base: "none", md: "flex" }}
                bottom={0}
                right={0}
                width={100}
                alignSelf={"flex-end"}
                justify={"center"}
              >
                <ChakraBox
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                    delay: 2,
                    duration: 0.5,
                  }}
                >
                  <Divider height={"28"} orientation="vertical" />
                </ChakraBox>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </Flex>
    </Scrollbar>
  );
};

export default MainLayout;
