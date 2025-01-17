// constants
import sidebarLinks from "@constants/sidebarLinks";

// components
import { Group, Text } from "@mantine/core";
import Icon from "@shared/Icon";
import SidebarLinkItem from "./SidebarLinkItem";

// icons
import IconMingcuteTaskFill from "@icons/MingcuteTaskFill";

// types
import type { NavbarProps } from "@interfaces/sharedTypes";
import type { FC } from "react";

const Navbar: FC<NavbarProps> = ({ toggleMenu }) => {
  return (
    <>
      <Group gap={10} py={20} px={38} h={{ md: 75, sm: 75, lg: 100 }}>
        <Icon icon={IconMingcuteTaskFill} size={35} />
        <Text className="font-extrabold text-2xl" c={"blue.9"}>
          Soar Task
        </Text>
      </Group>
      {sidebarLinks.map((item) => (
        <SidebarLinkItem
          key={`sidebar_link_${item.title}`}
          onClick={toggleMenu}
          {...item}
        />
      ))}
    </>
  );
};

export default Navbar;
