import { Box, Divider, HStack, Stack, VStack, Text } from "@chakra-ui/react";
import ChakraBox from "../../components/ChakraBox";
import Util from "../../util";

import { useEffect } from "react";
import TagCloud from "TagCloud";
import colors from "../../styles/colors";

const Skills = () => {
  useEffect(() => {
    TagCloud(
      ".tagcloud",
      [
        "TypeScript",
        "React",
        "React Native",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
        "Git",
        "AWS DynamoDB",
        "AWS S3",
        "AWS Lambda",
        "AWS Elasticbeanstalk",
        "AWS EC2",
        "AWS SQS",
        "AWS ECS",
        "AWS Cognito",
        "Java",
        "Android Native",
        "HTML",
        "CSS",
        "NextJS",
        "NestJS",
        "JavaScript",
        "PHP",
        "PhpMyAdmin",
        "PostgreSQL",
        "Typeorm",
      ],
      {
        radius: 200,
        useContainerInlineStyles: true,
        useItemInlineStyles: true,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      }
    );
  }, []);
  return (
    <Box paddingBlock={20}>
      <ChakraBox
        height="500"
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
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <VStack
            width={{
              base: "90%",
              md: "80%",
              lg: "70%",
              xl: "60%",
              "2xl": "50%",
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <HStack width="100%">
              <Text
                fontFamily={"Space Mono"}
                fontSize={16}
                color={colors.primary}
              >
                03.
              </Text>
              <Text
                as={"span"}
                fontSize={24}
                fontWeight="bold"
                color={colors.lightText}
                whiteSpace={"nowrap"}
              >
                {`My Expertise Weaponry`}
              </Text>
              <Box width={"100%"} paddingInline={2}>
                <Divider borderColor={colors.divider} />
              </Box>
            </HStack>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                className="tagcloud"
                style={{
                  color: colors.primary,
                }}
              />
              <Text
                mb={2}
                fontSize={17}
                color={colors.darkText}
                // textAlign={"justify"}
              >
                As a software engineer, I have gathered a wide range of
                technical and non-technical skills in my quest to become a
                strong individual contributor capable of leading projects from
                ideation to fruition. With these skills, I am now equipped to
                not only generate a plan for a project but also implement it
                with a diverse range of technologies from my arsenal. Whether
                it's coding, design, or project management, I possess the
                necessary expertise to take on any challenge and deliver
                high-quality software solutions that exceed expectations.
              </Text>
            </Stack>
          </VStack>
        </Stack>
      </ChakraBox>
    </Box>
  );
};

export default Skills;
