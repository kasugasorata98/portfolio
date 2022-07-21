import { Button, Flex, Link, Text } from "@chakra-ui/react";
import colors from "../../styles/colors";

const About = () => {
  return (
    <>
      <Flex
        height={"80vh"}
        justify={"center"}
        direction={"column"}
        marginInline={{ base: 10, md: 50, xl: 200 }}
      >
        <Text
          mb={3}
          fontFamily={"Space Mono"}
          fontSize={16}
          color={colors.primary}
        >
          Hi, my name is
        </Text>
        <Text
          letterSpacing={2}
          fontWeight={"bold"}
          fontSize={{ base: "24px", md: "48px", lg: "72px", xl: "80px" }}
          color={colors.lightText}
        >
          Jeromy Kho.
        </Text>
        <Text
          letterSpacing={2}
          fontWeight={"bold"}
          fontSize={{ base: "24px", md: "48px", lg: "72px", xl: "80px" }}
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
            style={{
              textDecoration: "none",
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
      </Flex>
    </>
  );
};

export default About;
