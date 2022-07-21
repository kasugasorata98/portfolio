import { Box, Flex, Text } from "@chakra-ui/react";
import colors from "../../styles/colors";

const About = () => {
  return (
    <>
      <Flex
        height={"80vh"}
        justify={"center"}
        direction={"column"}
        marginInline={{ base: 0, md: 50, xl: 200 }}
      >
        <Text fontSize={16} color={colors.primary}>
          Hi, my name is
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          color={colors.lightText}
        >
          Jeromy Kho.
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          color={colors.darkText}
        >
          I am a builder.
        </Text>
        <Text
          mt={5}
          fontSize={{ base: "13px", md: "15px", lg: "20px" }}
          color={colors.darkText}
        >
          I am a Software Engineer who is versatile in many languages. I'm
          experienced in the field of frontend (Mobile/Website), backend, and
          working with Cloud architectures like AWS. I have also created a
          cryptocurrency trading bot using my knowledge of Node JS, AWS Lambda,
          and AWS Elasticbeanstalk with a NoSQL database known as MongoDB. I
          also have knowledge in Solidity and have created a simple smart
          contract on the Ethereum Blockchain and accessed the smart contract in
          React Web using the web3 library. P.S: I'm a strong believer that a
          good programmer/developer is also a great gamer. Playing games is the
          practice of using the brain to think and predict a few steps ahead.
          Just like coding, we need to look a few steps ahead and use if-else
          conditions. When playing games, we are already using if-else
          conditions in our brains subconsciously.
        </Text>
      </Flex>
    </>
  );
};

export default About;
