import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../../components/Header";
import colors from "../../styles/colors";

const MainLayout: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <Box paddingBlock={5} paddingInline={10} bg={colors.background}>
      <Box mb={10}>
        <Header />
      </Box>
      <Box pl={4} pr={4}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
