import { Box, Flex, HStack, VStack, Text, Divider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../../components/Header";
import colors from "../../styles/colors";

const MainLayout: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <Flex height={"100vh"} paddingTop={5} bg={colors.background}>
      <VStack>
        <Box paddingInline={10} alignSelf={"stretch"}>
          <Header />
        </Box>
        <Box>{children}</Box>
      </VStack>
    </Flex>
  );
};

export default MainLayout;
