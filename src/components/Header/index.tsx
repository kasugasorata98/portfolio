import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import colors from "../../styles/colors";
import { useRouter } from "next/router";
import { NavItem, ScrollFrame } from "../../entities/types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import ChakraBox from "../ChakraBox";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Projects",
    children: [
      {
        label: "Pizza Ordering System",
        subLabel: "A pizza ordering system made better",
        href: "#",
      },
      {
        label: "Binance Crypto Trade Bot",
        subLabel: "24/7 Automated Trading",
        href: "#",
      },
    ],
  },
  {
    label: "Skills",
    href: "#",
  },
  {
    label: "Work",
    children: [
      {
        label: "Bridzia Sdn Bhd",
        subLabel: "Leading omnichannel eCommerce solutions provider",
        href: "https://bridzia.com.my/",
      },
      {
        label: "Astro Sdn Bhd",
        subLabel: "All-Asian Satellite Television and Radio Operator",
        href: "https://www.astro.com.my/",
      },
      {
        label: "Naluri Hidup Sdn Bhd",
        subLabel: "An evidence-based digital health solution",
        href: "https://www.naluri.life/",
      },
    ],
  },
  {
    label: "Contact",
    children: [
      {
        label: "Facebook",
        subLabel: "https://www.facebook.com/jeromy.kho/",
        href: "https://www.facebook.com/jeromy.kho/",
      },
      {
        label: "Instagram",
        subLabel: "https://www.instagram.com/jeromy_kho/?hl=en",
        href: "https://www.instagram.com/jeromy_kho/?hl=en",
      },
      {
        label: "Linkedin",
        subLabel: "https://www.linkedin.com/in/jeromy-kho-b06052212/",
        href: "https://www.linkedin.com/in/jeromy-kho-b06052212/",
      },
    ],
  },
];

const Header: React.FC<{
  showShadow?: boolean;
}> = ({ showShadow }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <ChakraBox
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
        }}
      >
        <HStack
          // position={{ base: "unset", md: "fixed" }}
          width={"100vw"}
          color={useColorModeValue("gray.600", "white")}
          paddingInline={10}
          boxShadow={showShadow ? "md" : "none"}
          justifyContent={"space-between"}
          paddingBottom={{ base: 5, md: 3 }}
          paddingTop={{ base: 5, md: 3 }}
          backdropFilter={"blur(10px) saturate(100%)"}
        >
          <Flex flexGrow={1} justify={{ base: "normal", md: "space-between" }}>
            <Box
              boxSize="50px"
              p={2}
              mr={5}
              alignSelf="center"
              borderWidth={2}
              borderColor={colors.primary}
              _hover={{
                bg: colors.hoverDark,
                cursor: "pointer",
              }}
            >
              <Image
                onClick={() => {
                  router.push("/");
                }}
                alignSelf={"center"}
                src="assets/images/logo.png"
                alt="J"
              />
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={5}>
              <DesktopNav NAV_ITEMS={NAV_ITEMS} />
            </Flex>
          </Flex>

          <IconButton
            display={{ base: "flex", md: "none" }}
            colorScheme={"none"}
            onClick={onToggle}
            _hover={{
              bg: colors.hoverDark,
            }}
            icon={
              isOpen ? (
                <CloseIcon color={colors.darkPrimary} w={3} h={3} />
              ) : (
                <HamburgerIcon color={colors.darkPrimary} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />

          <Button
            colorScheme={"none"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={15}
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
              style={{
                textDecoration: "none",
              }}
              href={"https://resume.io/r/oqPCVLgfX"}
            >
              Resume
            </Link>
          </Button>
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav NAV_ITEMS={NAV_ITEMS} />
        </Collapse>
      </ChakraBox>
    </Box>
  );
};

export default Header;
