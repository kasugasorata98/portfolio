import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import colors from "../../styles/colors";
import { useRouter } from "next/router";
import { NavItem, PageReference } from "../../entities/types";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import ChakraBox from "../ChakraBox";
import MusicAnimation from "../../lotties/music.json";
import Lottie from "lottie-react";
import Scrollbars from "react-custom-scrollbars-2";
import AudioPlayer from "../AudioPlayer";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  function scrollTo(key: string) {
    scrollRef.current?.scrollTop(pageReference[key].current?.offsetTop || 0);
  }
  const [play, setPlay] = useState<boolean>(false);
  useEffect(() => {
    const handleFocus = () => {
      setPlay(true);
    };
    document.addEventListener("mousedown", handleFocus);
    return () => {
      document.removeEventListener("mousedown", handleFocus);
    };
  }, []);

  return (
    <Box>
      {hasWindow &&
        (() => {
          return (
            <>
              <AudioPlayer play={play} />
            </>
          );
        })()}
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

          <Tooltip
            placement="bottom-start"
            label={play ? "Press to Stop" : "Press to Play"}
          >
            <Box
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => {
                setPlay(!play);
              }}
              width={14}
            >
              <Lottie
                animationData={MusicAnimation}
                disabled={!hasWindow}
                autoplay={play}
                loop={play}
                onClick={() => setPlay(!play)}
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
