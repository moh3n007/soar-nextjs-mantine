// types
import type { PropsWithChildren } from "react";
import type { IconSVGProps, UserData } from "@interfaces/commonProps";
import type { StackProps } from "@mantine/core";

export type AvatarWithLabelProps = StackProps &
  UserData & {
    isFocused?: boolean;
  };

export interface BankCardProps {
  balance: number;
  cardHolder: string;
  validDate: string;
  cardNumber: string;
}

export interface TransactionProps {
  variant: "deposit" | "withdraw";
  amount: number;
  date: string;
  title: string;
}

// types

export interface SidebarLinkItemProps {
  title: string;
  link: string;
  icon: IconSVGProps;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  text?: string;
}

export interface HeaderProps extends NavbarProps {
  title?: string;
}

export interface NavbarProps {
  toggleMenu?: VoidFunction;
}

export interface SectionProps extends PropsWithChildren {
  title?: string;
  withBg?: boolean;
  classNames?: {
    root?: string;
    title?: string;
    content?: string;
  };
  action?: React.ReactNode;
  hideTitleBox?: boolean;
}
