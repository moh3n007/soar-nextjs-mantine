// components
import { ActionIcon, Avatar, Group, Text } from "@mantine/core";
import Icon from "@shared/Icon";
import Link from "next/link";
import HeaderSearch from "./shared/HeaderSearch";

// icons
import IconSettings from "@icons/Settings";
import IconNotification from "@icons/Notification";

// types
import type { HeaderProps } from "@interfaces/sharedTypes";

// constants
import { ROUTES } from "@constants/routes";

const DesktopHeader = (props: Partial<HeaderProps>) => {
  const { title } = props;
  return (
    <>
      <Text className="font-semibold text-28 leading-[34px]" c={"blue.9"}>
        {title}
      </Text>
      <Group ml="auto" gap={30}>
        <HeaderSearch />
        <ActionIcon
          variant="light"
          radius="xl"
          size="lg"
          aria-label="Settings"
          color="blue.2"
        >
          <Icon icon={IconSettings} />
        </ActionIcon>
        <ActionIcon variant="light" radius="xl" size="lg" aria-label="Settings">
          <Icon icon={IconNotification} />
        </ActionIcon>
        <Link href={ROUTES.SETTINGS}>
          <Avatar size={60} src={"/user_avatar.jpeg"} />
        </Link>
      </Group>
    </>
  );
};

export default DesktopHeader;
