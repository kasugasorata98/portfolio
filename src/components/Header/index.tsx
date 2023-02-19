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
import { NavItem, PageReference, ScrollFrame } from "../../entities/types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Ref, useEffect, useState } from "react";
import ChakraBox from "../ChakraBox";
import ReactPlayer from "react-player";
import MusicAnimation from "../../lotties/music.json";
import Lottie from "lottie-react";
import Scrollbars from "react-custom-scrollbars-2";
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "#about",
    key: "about",
  },
  {
    label: "Work",
    href: "#work",
    key: "work",
  },
  {
    label: "Projects",
    href: "#projects",
    key: "projects",
  },
  {
    label: "Skills",
    href: "#skills",
    key: "skills",
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
  showHeader?: boolean;
  scrollRef: React.RefObject<Scrollbars>;
  pageReference: PageReference;
}> = ({ showShadow, showHeader, pageReference, scrollRef }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  const [hasWindow, setHasWindow] = useState(false);
  const [isMuted, setMuted] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  function scrollTo(key: string) {
    scrollRef.current?.scrollTop(pageReference[key].current?.offsetTop || 0);
  }

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
          paddingBlock={3}
          paddingInline={8}
          backdropFilter={"blur(10px) saturate(100%)"}
          opacity={showHeader ? 1 : 0}
          transition={"0.5s"}
        >
          <HStack
            flexGrow={1}
            alignItems={"center"}
            justify={{ base: "normal", md: "space-between" }}
          >
            <Box
              onClick={() => {
                router.push("/");
                scrollTo("home");
              }}
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
                alignSelf={"center"}
                src="assets/images/logo.png"
                alt="J"
              />
            </Box>

            <Flex display={{ base: "none", md: "none", lg: "flex" }} ml={5}>
              <DesktopNav NAV_ITEMS={NAV_ITEMS} scrollTo={scrollTo} />
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
                download={"jeromy_kho_resume_12-02-2023.pdf"}
                href="/assets/files/resume.pdf"
              >
                Resume
              </Link>
            </Button>
          </Box>

          <Tooltip
            placement="bottom-start"
            label={isMuted ? "Press to Play" : "Press to Stop"}
          >
            <Box
              _hover={{
                cursor: "pointer",
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
          <MobileNav
            toggleNav={onToggle}
            NAV_ITEMS={NAV_ITEMS}
            scrollTo={scrollTo}
          />
        </Collapse>
      </ChakraBox>
    </Box>
  );
};

export default Header;
