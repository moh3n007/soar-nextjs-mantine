// types
import type { IconSVGProps } from "@interfaces/commonProps";

export interface ISidebarLinkItemProps {
  title: string;
  link: string;
  icon: IconSVGProps;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  text?: string;
}

export interface HeaderProps {
  title?: string;
}

export interface NavbarProps {
  toggleMenu: VoidFunction;
}
