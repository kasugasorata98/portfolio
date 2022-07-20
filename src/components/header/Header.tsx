import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import colors from "../../styles/colors";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "01. About",
    href: "#",
  },
  {
    label: "02. Projects",
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
    label: "03. Experience",
    href: "#",
  },
  {
    label: "04. Work",
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
    label: "04. Contact",
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
            onClick={onToggle}
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
          <Image boxSize="25px" src="assets/images/logo.png" alt="J" />
          <Flex display={{ base: "none", md: "flex" }} mr={6}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={colors.darkPrimary}
            borderColor={colors.darkPrimary}
            borderWidth={2}
            bg={"#0A192F"}
            _hover={{
              bg: "#133040",
            }}
          >
            Resume
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={5}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={"#CCD6F6"}
                _hover={{
                  textDecoration: "none",
                  color: colors.darkPrimary,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      borderRadius={10}
      boxShadow="inherit"
      bg={"#112240"}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
