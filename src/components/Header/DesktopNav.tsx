import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  HStack,
  PopoverContent,
  Flex,
  Icon,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import { NavItem } from "../../entities/types";
import colors from "../../styles/colors";

const DesktopNav: React.FC<{
  NAV_ITEMS: Array<NavItem>;
}> = ({ NAV_ITEMS }) => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={5}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={400}
                color={"#CCD6F6"}
                _hover={{
                  textDecoration: "none",
                  color: colors.primary,
                }}
              >
                <HStack mr={3}>
                  <Text fontWeight={"500"} color={colors.primary}>{`0${
                    index + 1
                  }.`}</Text>
                  <Text>{navItem.label}</Text>
                </HStack>
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
  const hoverColor = "#f5fdfb";
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: hoverColor }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: colors.darkPrimary }}
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
          <Icon color={colors.darkPrimary} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopNav;
