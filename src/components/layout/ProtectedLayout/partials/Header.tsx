// components
import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import Icon from "@shared/Icon";

// icons
import IconMagnifyingGlass from "@icons/MagnifyingGlass";
import IconSettings from "@icons/Settings";
import IconNotification from "@icons/Notification";

// types
import type { FC } from "react";
import type { HeaderProps } from "@interfaces/sharedTypes";

const Header: FC<HeaderProps> = (props) => {
  const { title, toggleMenu } = props;
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
        <Burger size="sm" onClick={toggleMenu} />
        <Input
          radius="xl"
          size="md"
          variant="filled"
          placeholder="Search for something"
          leftSection={
            <Icon icon={IconMagnifyingGlass} size={16} color={"blue.2"} />
          }
        />
      </Stack>
      <Group h="100%" py={20} px={38} visibleFrom="md" flex={1}>
        <Text className="font-semibold text-28 leading-[34px]" c={"blue.9"}>
          {title}
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
  );
};

export default Header;
