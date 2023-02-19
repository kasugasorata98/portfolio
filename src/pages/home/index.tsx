import { Box, Button, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ChakraBox from "../../components/ChakraBox";
import colors from "../../styles/colors";
import Util from "../../util";

const Home = () => {
  return (
    <Box height={Util.useHeight()} width={"100%"}>
      <ChakraBox
        height="100%"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height="100%"
        >
          <Box
            height={"100%"}
            width={{ base: "90%", md: "85%", lg: "80%", xl: "70%" }}
          >
            <VStack
              height={"100%"}
              justify={"center"}
              alignItems="flex-start"
              direction={"column"}
            >
              <Text
                mb={3}
                fontFamily={"Space Mono"}
                fontSize={16}
                color={colors.primary}
              >
                <TypeAnimation
                  cursor={false}
                  sequence={[1000, "Hi, my name is"]}
                />
              </Text>

              <Text
                letterSpacing={2}
                fontWeight={"bold"}
                fontSize={{ base: "24px", md: "48px", lg: "60px", xl: "65px" }}
                color={colors.lightText}
              >
                <TypeAnimation
                  cursor={false}
                  sequence={[2000, "Jeromy Kho."]}
                />
              </Text>

              <Text
                letterSpacing={2}
                fontWeight={"bold"}
                fontSize={{ base: "24px", md: "48px", lg: "60px", xl: "65px" }}
                color={colors.darkText}
              >
                <TypeAnimation sequence={[3000, "Software Engineer."]} />
              </Text>
              <Text
                letterSpacing={1}
                mt={5}
                // mr={{ base: 0, md: 150, lg: 300, xl: 450 }}
                fontSize={{ base: "13px", md: "15px", lg: "16px" }}
                color={colors.darkText}
              >
                {`
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building my knowledge and experience at
          `}
                <Link
                  target="_blank"
                  textDecoration="none"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  color={colors.primary}
                  letterSpacing={1}
                  href="https://www.naluri.life/"
                >
                  Naluri
                </Link>
                {"."}
              </Text>
              <Box paddingTop="10">
                <Button
                  fontFamily={"Space Mono"}
                  colorScheme={"none"}
                  fontSize={{ base: 11, md: 13, xl: 15 }}
                  p={7}
                  alignSelf="flex-start"
                  fontWeight={500}
                  color={colors.primary}
                  borderColor={colors.primary}
                  borderWidth={2}
                  bg={colors.background}
                  _hover={{
                    bg: colors.hoverDark,
                  }}
                >
                  <Link
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                    href="https://github.com/kasugasorata98/portfolio"
                  >
                    {`This Portfolio's Github Repository!`}
                  </Link>
                </Button>
              </Box>
            </VStack>
            {/* <Flex
              height={"100%"}
              justify={"center"}
              alignSelf="center"
              direction={"column"}
              bg="blue"
              // marginInline={{ base: 10, md: 75, lg: 100, xl: 200 }}
            ></Flex> */}
          </Box>
        </Stack>
      </ChakraBox>
    </Box>
  );
};

export default Home;
