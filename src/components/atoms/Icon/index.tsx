import { DefaultMantineColor, Flex, StyleProp } from "@mantine/core";

interface IIconProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  color?: StyleProp<DefaultMantineColor>;
  size?: number
}

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { icon, color, size = 24 } = props;
  return <Flex c={color} className="iconWrapper">{icon({ width: size, height: size })}</Flex>;
};

export default Icon;
