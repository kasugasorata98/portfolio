import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChakraBox from "../../components/ChakraBox";
import SkillItem from "../../components/SkillItem";
import colors from "../../styles/colors";

const About = () => {
  return (
    <Box height={"100%"} width={"100%"} paddingBlock={20}>
      <ChakraBox
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height="100%"
        >
          <Box
            marginRight={{ base: 0, md: 10 }}
            width={{ base: "90%", md: "60%", lg: "55%", xl: "40%" }}
          >
            <VStack alignItems={"flex-start"}>
              <HStack width="100%" marginBottom={10}>
                <Text
                  fontFamily={"Space Mono"}
                  fontSize={16}
                  color={colors.primary}
                >
                  01.
                </Text>
                <Text fontSize={24} fontWeight="bold" color={colors.lightText}>
                  About
                </Text>
                <Text fontSize={24} fontWeight="bold" color={colors.lightText}>
                  Me
                </Text>
                <Box width={"100%"} paddingInline={2}>
                  <Divider borderColor={colors.divider} />
                </Box>
              </HStack>
              <VStack alignItems={"flex-start"}>
                <Text mb={2} fontSize={17} color={colors.darkText}>
                  {`Hello! My name is Jeromy and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2018 when I decided to try to create an event website for
                  an orchestra performance.`}
                </Text>
                <Box>
                  <Text
                    as={"span"}
                    mb={2}
                    fontSize={17}
                    color={colors.darkText}
                  >
                    {`Fast-forward to today, and I’ve had the privilege of working
                at a health-tech. My main focus these days is building
                accessible, inclusive products and digital experiences at`}
                  </Text>{" "}
                  <Link
                    as={"span"}
                    target="_blank"
                    textDecoration="none"
                    _hover={{
                      textDecoration: "underline",
                    }}
                    mb={2}
                    color={colors.primary}
                    letterSpacing={1}
                    href="https://www.naluri.life/"
                  >
                    Naluri
                  </Link>
                  <Text
                    as={"span"}
                    mb={2}
                    fontSize={17}
                    color={colors.darkText}
                  >
                    .
                  </Text>
                </Box>
                <Text mb={2} fontSize={17} color={colors.darkText}>
                  {`Here are a few technologies I've been working with recently:`}
                </Text>
                <HStack paddingTop={5} spacing={"16"}>
                  <VStack alignItems={"flex-start"}>
                    <SkillItem skill="Typescript" />
                    <SkillItem skill="Web3" />
                    <SkillItem skill="Solidity" />
                  </VStack>
                  <VStack alignItems={"flex-start"}>
                    <SkillItem skill="MongoDB" />
                    <SkillItem skill="Postgre" />
                    <SkillItem skill="ApolloGraphQL" />
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          <Box paddingTop={10}>
            <Box
              width={{ base: 250, md: 200, lg: 250 }}
              height={{ base: 250, md: 200, lg: 250 }}
              borderWidth={2}
              borderColor={colors.primary}
              borderRadius={5}
            >
              <Image
                borderRadius={5}
                position={"relative"}
                transition={"0.5s"}
                _hover={{
                  right: 6,
                  bottom: 6,
                }}
                right={4}
                bottom={4}
                alt="me"
                width={{ base: 250, md: 200, lg: 250 }}
                src="https://avatars.githubusercontent.com/u/50161346?v=4"
              />
            </Box>
          </Box>
        </Stack>
      </ChakraBox>
    </Box>
  );
};

export default About;
