// types
import type { DefaultMantineColor, StyleProp } from "@mantine/core";

export type IconSVGProps = (
  props: React.SVGProps<SVGSVGElement>,
) => React.JSX.Element;

export interface IconProps {
  icon: IconSVGProps;
  color?: StyleProp<DefaultMantineColor>;
  size?: number;
}
