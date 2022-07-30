import { HStack, Icon, Text } from "@chakra-ui/react";
import colors from "../../styles/colors";
import { AiFillCaretRight } from "react-icons/ai";

const SkillItem: React.FC<{
  skill?: string;
}> = ({ skill }) => {
  return (
    <HStack>
      <Icon width={3} color={colors.primary} as={AiFillCaretRight} />
      <Text
        letterSpacing={1}
        fontFamily={"Space Mono"}
        fontSize={13}
        color={colors.darkText}
      >
        {skill}
      </Text>
    </HStack>
  );
};

export default SkillItem;
