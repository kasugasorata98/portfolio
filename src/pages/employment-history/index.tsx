import {
  Box,
  HStack,
  Stack,
  VStack,
  Text,
  Divider,
  Link,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import ChakraBox from "../../components/ChakraBox";
import SkillItem from "../../components/SkillItem";
import colors from "../../styles/colors";

type EmploymentDetails = {
  employee: string;
  jobTitle: string;
  content: string;
  startDate: string;
  endDate: string;
};

const employmentHistory: EmploymentDetails[] = [
  {
    employee: "Naluri Hidup Sdn Bhd",
    jobTitle: "Full Stack Software Engineer",
    content: `Currently owning a couple of domains 
    which are identity and internal tools. 
    Frequently interviewing candidates for the engineering team. 
    Expanding my knowledge in aws cloud infra to eventually 
    become a devop. React and react native comes as a second 
    nature at this point for web and mobile application development 
    while Node.js being the backend of things.`,
    startDate: "Mar 2022",
    endDate: "Present",
  },
  {
    employee: "Astro Malaysia Holdings Berhad",
    jobTitle: "Associate Software Engineer",
    content: `Being a backend engineer using NodeJS with MySQL and 
    AWS DynamoDB as the database and AWS Lambda for RestAPI. Using 
    Git for version control, and working in an agile environment. 
    Knowledge of Javascript was intensified during my time in Astro. 
    Worked with vendors from India and Vietnam which challenged my 
    communication skills and improved my communication skills with 
    engineers from a foreign country.`,
    startDate: "Jul 2021",
    endDate: "Mar 2022",
  },
  {
    employee: "Bridzia Sdn Bhd",
    jobTitle: "Junior Software Engineer",
    content: `Develop native android apps in Android Studio while using 
    dependencies such as RxJava and Retrofit, and hybrid apps with the 
    React Native framework. Also learned to develop my own backend from 
    scratch using node js and improved my knowledge in terms of using more 
    complex SQL queries. All projects are e-commerce projects done for clients 
    such as Guardian, QRA, F&N, Mydin and many more.`,
    startDate: "Oct 2020",
    endDate: "Jul 2021",
  },
  {
    employee: "Sushi King Sdn Bhd",
    jobTitle: "Intern Software Engineer",
    content: `Developed an in-house food ordering android app. The food ordering
     app is integrated with the POS system and kitchen display system. 
     I further improved my skills as a fullstack developer, using PHP 
     as the backend along with PHPMyAdmin for the MYSQL database and Android 
     Native in Java for the frontend.`,
    startDate: "Dec 2019",
    endDate: "Mar 2020",
  },
];

const EmploymentHistory = () => {
  return (
    <Box paddingBlock={20}>
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
        >
          <VStack
            width={{ base: "90%", md: "60%", lg: "55%", xl: "40%" }}
            alignItems={"flex-start"}
          >
            <HStack width="100%" marginBottom={10}>
              <Text
                fontFamily={"Space Mono"}
                fontSize={16}
                color={colors.primary}
              >
                02.
              </Text>
              <Text
                as={"span"}
                fontSize={24}
                fontWeight="bold"
                color={colors.lightText}
                whiteSpace={"nowrap"}
              >
                Where I've Worked
              </Text>
              <Box width={"100%"} paddingInline={2}>
                <Divider borderColor={colors.divider} />
              </Box>
            </HStack>
            <VStack alignItems={"flex-start"}>
              <Accordion defaultIndex={[0]}>
                {employmentHistory.map((employment) => {
                  return (
                    <AccordionItem
                      key={employment.employee}
                      sx={{
                        border: "none",
                      }}
                    >
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text
                            fontFamily={"Space Mono"}
                            fontSize={15}
                            color={colors.primary}
                          >
                            {employment.employee}
                          </Text>
                        </Box>
                        <AccordionIcon color={colors.primary} />
                      </AccordionButton>

                      <AccordionPanel>
                        <HStack ml={4} mb={3}>
                          <Icon
                            width={3}
                            color={colors.primary}
                            as={AiFillCaretRight}
                          />
                          <Text fontSize={15} color={colors.lightText}>
                            {`${employment.jobTitle} `}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={14}
                          color={colors.primary}
                          mb="2"
                          // fontFamily={"Space Mono"}
                          textDecoration="underline"
                          ml={4}
                        >
                          {`${employment.startDate} - ${employment.endDate}`}
                        </Text>
                        <Text fontSize={15} color={colors.darkText} ml={4}>
                          {employment.content}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </VStack>
          </VStack>
        </Stack>
      </ChakraBox>
    </Box>
  );
};

export default EmploymentHistory;
