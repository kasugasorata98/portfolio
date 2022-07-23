import { Box, Flex, Image } from "@chakra-ui/react";
import router from "next/router";
import ChakraBox from "../../components/ChakraBox";
import colors from "../../styles/colors";

const Loading: React.FC<{
  duration: number;
  onAnimationComplete: Function;
}> = ({ duration, onAnimationComplete }) => {
  return (
    <Box height={"100vh"} width={"100vw"}>
      <Flex
        width="100%"
        height="100%"
        alignItems={"center"}
        justify={"center"}
        bg={colors.darkBackground}
      >
        <ChakraBox
          animate={{
            scale: [1, 2],
            rotate: [0, 1080],
          }}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: "-200%" }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: duration,
            delay: 0.5,
          }}
          onAnimationComplete={() => {
            setTimeout(onAnimationComplete);
          }}
        >
          <Box
            boxSize="50px"
            p={2}
            alignSelf="center"
            borderWidth={2}
            borderColor={colors.primary}
          >
            {" "}
            <Image
              onClick={() => {
                router.push("/");
              }}
              alignSelf={"center"}
              src="assets/images/logo.png"
              alt="J"
            />
          </Box>
        </ChakraBox>
      </Flex>
    </Box>
  );
};

export default Loading;
