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
  Text,
  FormLabel,
  Switch,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import colors from "../../styles/colors";
import { useRouter } from "next/router";
import { NavItem } from "../../entities/types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import ChakraBox from "../ChakraBox";
import ReactPlayer from "react-player";
import MusicAnimation from "../../lotties/music.json";
import Lottie from "lottie-react";
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

  const [hasWindow, setHasWindow] = useState(false);
  const [isMuted, setMuted] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Box>
      {hasWindow && (
        <ReactPlayer
          width={0}
          height={0}
          loop={true}
          playing={true}
          muted={isMuted}
          url="https://www.youtube.com/watch?v=tYNv5td6ALU"
        />
      )}
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
          width={"100vw"}
          color={useColorModeValue("gray.600", "white")}
          boxShadow={showShadow ? "md" : "none"}
          paddingBlock={{ base: 5, md: 5 }}
          paddingInline={{ base: 5, md: 5 }}
          backdropFilter={"blur(10px) saturate(100%)"}
        >
          <HStack
            flexGrow={1}
            alignItems={"center"}
            justify={{ base: "normal", md: "space-between" }}
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

            <Flex display={{ base: "none", md: "none", lg: "flex" }} ml={5}>
              <DesktopNav NAV_ITEMS={NAV_ITEMS} />
            </Flex>
          </HStack>
          <Box>
            <Button
              colorScheme={"none"}
              fontFamily={"Space Mono"}
              fontSize={13}
              color={colors.primary}
              display={{ base: "none", md: "none", lg: "flex" }}
              fontWeight={500}
              borderColor={colors.primary}
              borderWidth={2}
              bg={colors.background}
              _hover={{
                bg: colors.hoverDark,
              }}
            >
              <Link
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
                href={"https://resume.io/r/oqPCVLgfX"}
              >
                Resume
              </Link>
            </Button>
          </Box>

          <Tooltip
            placement="bottom-start"
            label={isMuted ? "Play music" : "Stop playing"}
          >
            <Box
              _hover={{
                cursor: "pointer",
                transition: "0.5s",
              }}
              onClick={() => {
                setMuted(!isMuted);
              }}
              width={14}
            >
              <Lottie
                animationData={MusicAnimation}
                disabled={!hasWindow}
                autoplay={!isMuted}
                loop={!isMuted}
                onClick={() => setMuted(!isMuted)}
              />
            </Box>
          </Tooltip>

          {/* <HStack
            borderWidth={2}
            borderColor={colors.primary}
            paddingBlock={2}
            paddingInline={4}
            borderRadius={6}
          >
            <Text
              fontFamily={"Space Mono"}
              fontSize={13}
              color={colors.primary}
            >
              Music
            </Text>

            <Switch
              disabled={!hasWindow}
              colorScheme={"teal"}
              size={"md"}
              isChecked={!isMuted}
              onChange={() => {
                console.log("clicked");
                ;
              }}
            />
          </HStack> */}
          <IconButton
            display={{ base: "flex", md: "flex", lg: "none" }}
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
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav NAV_ITEMS={NAV_ITEMS} />
        </Collapse>
      </ChakraBox>
    </Box>
  );
};

export default Header;
