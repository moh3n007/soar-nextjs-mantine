// components
import { Group, Stack } from "@mantine/core";

// dynamic imports
const MobileHeader = dynamic(() => import("./Header/MobileHeader"));
const DesktopHeader = dynamic(() => import("./Header/DesktopHeader"));

// types
import type { FC } from "react";
import type { HeaderProps } from "@interfaces/sharedTypes";

// helper funcs
import dynamic from "next/dynamic";

const Header: FC<HeaderProps> = (props) => {
  return (
    <Group h="100%">
      <Stack
        hiddenFrom="md"
        p={24}
        h={"100%"}
        flex={1}
        gap={0}
        justify="space-between"
      >
        <MobileHeader {...props} />
      </Stack>
      <Group h="100%" py={20} px={38} visibleFrom="md" flex={1}>
        <DesktopHeader {...props} />
      </Group>
    </Group>
  );
};

export default Header;
