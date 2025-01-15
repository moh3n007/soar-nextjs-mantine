"use client";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Group,
  Input,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import TaskIcon from "@icons/TaskIcon";
import { PropsWithChildren } from "react";
import SettingIcon from "../svg/SettingIcon";
import NotificationIcon from "../svg/NotificationIcon";
import SearchIcon from "../svg/SearchIcon";

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
                leftSection={<SearchIcon className="text-blue-200" />}
              />
              <ActionIcon
                variant="light"
                radius="xl"
                size={50}
                aria-label="Settings"
                color="blue.2"
              >
                <SettingIcon />
              </ActionIcon>
              <ActionIcon
                variant="light"
                radius="xl"
                size={50}
                aria-label="Settings"
              >
                <NotificationIcon />
              </ActionIcon>
              <Avatar size={60} src={"/user_avatar.jpeg"} />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Group gap={4} py={20} px={38} h={100}>
          <TaskIcon />
          <Text className="font-extrabold text-2xl" c={"blue.9"}>Soar Task</Text>
        </Group>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default ProtectedLayout;
