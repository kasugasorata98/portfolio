import { Button, chakra, Fade, Flex, Link, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import colors from "../../styles/colors";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const About = () => {
  return (
    <>
      <Flex
        height={"100%"}
        justify={"center"}
        direction={"column"}
        marginInline={{ base: 10, md: 100, xl: 250 }}
      >
        <Fade in={true}>
          <Text
            mb={3}
            fontFamily={"Space Mono"}
            fontSize={16}
            color={colors.primary}
          >
            Hi, my name is
          </Text>
          <ChakraBox
            animate={{
              scale: [0.2, 0.4, 0.6, 0.8, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Text
              letterSpacing={2}
              fontWeight={"bold"}
              fontSize={{ base: "24px", md: "48px", lg: "65px", xl: "70px" }}
              color={colors.lightText}
            >
              Jeromy Kho.
            </Text>
          </ChakraBox>

          <Text
            letterSpacing={2}
            fontWeight={"bold"}
            fontSize={{ base: "24px", md: "48px", lg: "65px", xl: "70px" }}
            color={colors.darkText}
          >
            {`I create. You consume.`}
          </Text>
          <Text
            letterSpacing={1}
            mt={5}
            mr={{ base: 0, md: 150, lg: 300, xl: 500 }}
            fontSize={{ base: "13px", md: "15px", lg: "16px" }}
            color={colors.darkText}
          >
            {`
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building my knowledge and experience on cloud infra to eventually be a devops at
          `}
            <Link
              sx={{
                textDecoration: "none",
                transform: "scaleX(0)",
              }}
              _hover={{
                textDecoration: "underline",
                transition: "transform 0.25s ease-out",
                transformOrigin: "bottom left",
                transform: "scaleX(1)",
              }}
              color={colors.primary}
              letterSpacing={1}
              href="https://www.naluri.life/"
            >
              Naluri
            </Link>
            {"."}
          </Text>
          <Button
            fontFamily={"Space Mono"}
            colorScheme={"none"}
            fontSize={15}
            mt={10}
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
            Check out my Github!
          </Button>
        </Fade>
      </Flex>
    </>
  );
};

export default About;
