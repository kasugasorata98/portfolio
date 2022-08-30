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
  scrollTo: Function;
  toggleNav: Function;
}> = ({ NAV_ITEMS, scrollTo, toggleNav }) => {
  return (
    <Stack
      borderRadius={10}
      boxShadow="inherit"
      bg={"#112240"}
      marginInline={8}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.key}
          scrollTo={scrollTo}
          NAV_ITEM={navItem}
          toggleNav={toggleNav}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem: React.FC<{
  NAV_ITEM: NavItem;
  scrollTo: Function;
  toggleNav: Function;
}> = ({ NAV_ITEM, scrollTo, toggleNav }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={NAV_ITEM.children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={NAV_ITEM.href ?? "#"}
        onClick={() => {
          scrollTo(NAV_ITEM.key ?? "");
          toggleNav();
        }}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={colors.lightText}>
          {NAV_ITEM.label}
        </Text>
        {NAV_ITEM.children && (
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
          borderColor={colors.primary}
          color={colors.lightText}
          align={"start"}
        >
          {NAV_ITEM.children &&
            NAV_ITEM.children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNav;
