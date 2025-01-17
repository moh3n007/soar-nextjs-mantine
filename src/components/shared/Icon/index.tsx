// types
import type { IconProps } from "@interfaces/commonProps";

// components
import { Flex } from "@mantine/core";

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { icon, color, size = 24, ...rest } = props;
  return (
    <Flex c={color} className="iconWrapper">
      {icon({ width: size, height: size, ...rest })}
    </Flex>
  );
};

export default Icon;
