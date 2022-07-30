import {
  Box,
  Flex,
  HStack,
  VStack,
  Divider,
  useMediaQuery,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import Snowfall from "../../lib/react-snowfall/lib/Snowfall";
import ChakraBox from "../../components/ChakraBox";
import Header from "../../components/Header";
import Scrollbar from "../../components/Scrollbar";
import { ScrollFrame } from "../../entities/types";
import colors from "../../styles/colors";
import Lottie from "lottie-react";
import WhatsAppAnimation from "../../lotties/whatsapp.json";
import FacebookAnimation from "../../lotties/facebook.json";
import LinkedinAnimation from "../../lotties/linkedin.json";
import GithubAnimation from "../../lotties/github.json";
import InstagramAnimation from "../../lotties/instagram.json";
const MainLayout: React.FC<{
  children?: ReactNode;
  showShadow?: boolean;
}> = ({ children, showShadow }) => {
  const socialButtons: Array<{
    animation: any;
    href: string;
  }> = [
    {
      animation: WhatsAppAnimation,
      href: "https://api.whatsapp.com/send?phone=60127816203",
    },
    {
      animation: FacebookAnimation,
      href: "https://www.facebook.com/jeromy.kho/",
    },
    {
      animation: LinkedinAnimation,
      href: "https://www.linkedin.com/in/jeromy-kho-b06052212/",
    },
    {
      animation: GithubAnimation,
      href: "https://github.com/kasugasorata98",
    },
    {
      animation: InstagramAnimation,
      href: "https://www.instagram.com/jeromy_kho/?hl=en",
    },
  ];
  const email = "jeromykho98@gmail.com";
  return (
    <Flex bg={colors.background}>
      <VStack position={"relative"}>
        <Box position={"fixed"} zIndex={10} alignSelf={"stretch"}>
          <Header showShadow={showShadow} />
        </Box>
        <HStack>
          <Box width={{ base: 0, md: 100 }}>
            <VStack
              position={{ base: "unset", md: "fixed" }}
              display={{ base: "none", md: "flex" }}
              bottom={0}
              left={0}
              width={100}
              alignSelf={"flex-end"}
              justify={"center"}
            >
              <ChakraBox
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  delay: 2,
                  duration: 0.5,
                }}
              >
                <VStack>
                  {socialButtons.map((social, index) => {
                    return (
                      <Link
                        key={index}
                        _hover={{
                          width: 20,
                          transition: "0.5s",
                          transitionTimingFunction: "ease-in-out",
                          cursor: "pointer",
                        }}
                        width={"12"}
                        target={"_blank"}
                        href={social.href}
                      >
                        <Lottie animationData={social.animation} loop={true} />
                      </Link>
                    );
                  })}
                  <Divider
                    style={{
                      marginTop: 20,
                    }}
                    height={"28"}
                    orientation="vertical"
                  />
                </VStack>
              </ChakraBox>
            </VStack>
          </Box>
          <Box>{children}</Box>
          <Box width={{ base: 0, md: 100 }}>
            <VStack
              position={{ base: "unset", md: "fixed" }}
              display={{ base: "none", md: "flex" }}
              bottom={0}
              right={0}
              width={100}
              alignSelf={"flex-end"}
              justify={"center"}
            >
              <ChakraBox
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  delay: 2,
                  duration: 0.5,
                }}
              >
                <VStack>
                  <Link
                    mb={"20"}
                    padding={10}
                    fontFamily="Space Mono"
                    fontSize="12"
                    letterSpacing={3}
                    fontWeight={"bold"}
                    href={`mailto:${email}`}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      transform: "rotate(90deg)",
                    }}
                    _hover={{
                      color: colors.darkPrimary,
                      marginBottom: 24,
                      fontSize: "13",
                      transition: "0.5s",
                      cursor: "pointer",
                    }}
                    color={colors.lightText}
                  >
                    {email}
                  </Link>
                  <Divider height={"28"} orientation="vertical" />
                </VStack>
              </ChakraBox>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default MainLayout;
