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
    content: `As a Full Stack Software Engineer at Naluri, I worked with
    a range of technologies including Typescript, Javascript, Postgres,
    AWS services, React, React Native, Nextjs, and Nestjs. My main project
    involved creating a login/register mechanism that streamlined the
    integration process for clients and provided a more seamless
    authentication experience. In addition, I helped other engineering
    squads with bug fixing and provided support as needed. 
    My versatile skill set allowed me to work effectively across
    all platforms, including web, mobile, and backend development.`,
    startDate: "Mar 2022",
    endDate: "Present",
  },
  {
    employee: "Astro Malaysia Holdings Berhad",
    jobTitle: "Associate Software Engineer",
    content: `As a Backend Engineer at Astro, I focused on using NodeJS 
    as the main programming language, with MySQL and AWS DynamoDB as the 
    main databases, and AWS Lambda for building RestAPIs. I gained significant 
    experience working with Git for version control, and also worked in an 
    agile development environment. During my time at Astro, I improved my 
    proficiency in Javascript and honed my technical skills in database 
    management and RestAPI development.`,
    startDate: "Jul 2021",
    endDate: "Mar 2022",
  },
  {
    employee: "Bridzia Sdn Bhd",
    jobTitle: "Junior Software Engineer",
    content: `During my tenure as an Android Developer, I have developed native 
    Android applications using Android Studio and incorporated dependencies such as 
    RxJava and Retrofit to enhance application performance. In addition, I have 
    also built hybrid apps with the React Native framework to create cross-platform applications.
    One of my major achievements was learning how to develop a backend from 
    scratch using Node.js and increasing my proficiency in writing complex SQL 
    queries. My experience in e-commerce projects involved working with clients 
    such as Guardian, QRA, F&N, Mydin, and many more, and has enabled me to gain 
    valuable insights into the industry, including e-commerce best practices, 
    user experience, and app design. Overall, my Android development experience 
    has equipped me with the technical skills and expertise to deliver robust 
    and scalable applications to a diverse range of clients.`,
    startDate: "Oct 2020",
    endDate: "Jul 2021",
  },
  {
    employee: "Sushi King Sdn Bhd",
    jobTitle: "Intern Software Engineer",
    content: `During my time as a Fullstack Developer, I led the development of 
    an in-house food ordering Android app that was integrated with the POS system 
    and kitchen display system. This involved designing and developing the app's 
    backend using PHP and managing the database using PHPMyAdmin, while also developing 
    the frontend using Android Native in Java. This project enabled me to gain 
    significant expertise in full-stack development and sharpen my technical skills 
    in PHP and Java, including designing and building APIs, optimizing database queries, 
    and improving app performance. Furthermore, I learned how to effectively integrate 
    multiple systems and technologies to create a seamless user experience for 
    customers and staff. Overall, this project has given me the skills and experience 
    necessary to excel in full-stack development and deliver high-quality, integrated 
    solutions to clients.`,
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
                {`Where I've Worked`}
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
