import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { NavItem } from "../../entities/types";
import colors from "../../styles/colors";

const MobileNav: React.FC<{
  NAV_ITEMS: Array<NavItem>;
}> = ({ NAV_ITEMS }) => {
  return (
    <Stack
      borderRadius={10}
      boxShadow="inherit"
      bg={"#112240"}
      marginInline={10}
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
        <Text fontWeight={600} color={colors.lightText}>
          {label}
        </Text>
        {children && (
          <Icon
            color={"white"}
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
          borderLeft={2}
          borderStyle={"solid"}
          borderColor={colors.primary}
          color={colors.lightText}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link target="_blank" key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNav;
