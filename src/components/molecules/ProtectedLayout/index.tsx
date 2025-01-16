"use client";

// components
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Group,
  Input,
  Text,
} from "@mantine/core";

// hooks
import { useDisclosure } from "@mantine/hooks";

// types
import type { PropsWithChildren } from "react";

// icons
import IconMagnifyingGlass from "@icons/MagnifyingGlass";
import IconSettings from "@icons/Settings";
import IconNotification from "@icons/Notification";
import IconMingcuteTaskFill from "@icons/MingcuteTaskFill";
import Icon from "../../atoms/Icon";
import SidebarLinkItem from "./partials/SidebarLinkItem";
import sidebarLinks from "@/src/constants/sidebarLinks";

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 60, md: 100 } }}
      navbar={{ width: 250, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%">
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
          <Group h="100%" py={20} px={38} visibleFrom="md" flex={1}>
            <Text className="font-semibold text-28 leading-[34px]" c={"blue.9"}>
              Overview
            </Text>
            <Group ml="auto" gap={30}>
              <Input
                radius="xl"
                size="lg"
                variant="filled"
                placeholder="Search for something"
                w={255}
                leftSection={
                  <Icon icon={IconMagnifyingGlass} size={20} color={"blue.2"} />
                }
              />
              <ActionIcon
                variant="light"
                radius="xl"
                size="lg"
                aria-label="Settings"
                color="blue.2"
              >
                <Icon icon={IconSettings} />
              </ActionIcon>
              <ActionIcon
                variant="light"
                radius="xl"
                size="lg"
                aria-label="Settings"
              >
                <Icon icon={IconNotification} />
              </ActionIcon>
              <Avatar size={60} src={"/user_avatar.jpeg"} />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Group gap={10} py={20} px={38} h={{ md: 75, sm: 75, lg: 100 }}>
          <Icon icon={IconMingcuteTaskFill} size={35} />
          <Text className="font-extrabold text-2xl" c={"blue.9"}>
            Soar Task
          </Text>
        </Group>
        {sidebarLinks
          .map((item) => (
            <SidebarLinkItem key={`sidebar_link_${item.title}`} onClick={toggle} {...item} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default ProtectedLayout;
