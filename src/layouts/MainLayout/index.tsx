import { Box, Flex, HStack, VStack, Text, Divider } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
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
  return (
    <Scrollbar
      onScrollFrame={(value: ScrollFrame) => {
        setScrollFrame(() => {
          setShowShadow(value.scrollTop > 0);
          return value;
        });
      }}
    >
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
                <Divider height={"28"} orientation="vertical" />
              </VStack>
            </Box>
            <Box height={"100vh"}>{children}</Box>
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
                <Divider height={"28"} orientation="vertical" />
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </Flex>
    </Scrollbar>
  );
};

export default MainLayout;
