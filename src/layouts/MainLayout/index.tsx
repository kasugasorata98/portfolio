import { Box } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "../../components/header/Header";

const MainLayout: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <Box pt={5} paddingInline={10} bg={"#0A192F"} height={"container.xl"}>
      <Header />
      <Box pl={4} pr={4} pt={5}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
