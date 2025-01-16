export interface ISidebarLinkItemProps {
    title: string;
    link: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }