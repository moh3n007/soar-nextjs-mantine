// components
import { Burger, Flex, Text } from "@mantine/core";
import UserAvatar from "./shared/UserAvatar";
import HeaderSearch from "./shared/HeaderSearch";

// types
import type { HeaderProps } from "@interfaces/sharedTypes";

const MobileHeader = (props: HeaderProps) => {
  const { toggleMenu, title } = props;
  return (
    <>
      <Flex justify={"space-between"}>
        <Burger size="sm" onClick={toggleMenu} />
        <Text size="lg" c={"blue.9"}>
          {title}
        </Text>
        <UserAvatar />
      </Flex>
      <HeaderSearch />
    </>
  );
};

export default MobileHeader;
