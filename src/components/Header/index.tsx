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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import colors from "../../styles/colors";
import { useRouter } from "next/router";
import { NavItem } from "../../entities/types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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

export default function Header() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#0A192F"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"#0A192F"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
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
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Box
            boxSize="50px"
            p={2}
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

          <Flex display={{ base: "none", md: "flex" }} mr={6}>
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            colorScheme={"none"}
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={500}
            color={colors.primary}
            borderColor={colors.primary}
            borderWidth={2}
            bg={colors.background}
            _hover={{
              bg: colors.hoverDark,
            }}
          >
            Resume
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
}
