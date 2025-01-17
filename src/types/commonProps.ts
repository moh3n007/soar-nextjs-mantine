// types
import type { DefaultMantineColor, StyleProp } from "@mantine/core";

export type TransactionType = "deposit" | "withdraw";

export type IconSVGProps = (
  props: React.SVGProps<SVGSVGElement>,
) => React.JSX.Element;

export interface IconProps {
  icon: IconSVGProps;
  color?: StyleProp<DefaultMantineColor>;
  size?: number;
  className?: string;
}

export interface UserData {
  avatarUrl: string;
  fullName: string;
  role: string;
}
