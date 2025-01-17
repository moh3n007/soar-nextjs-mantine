// types
import type { AvatarWithLabelProps } from "@interfaces/sharedTypes";
import type { FC } from "react";

// components
import { Avatar, Stack, Text } from "@mantine/core";

const AvatarWithLabel: FC<AvatarWithLabelProps> = (props) => {
  const { avatarUrl, fullName, role, isFocused, ...rext } = props;
  return (
    <Stack {...rext} align="center" className="cursor-pointer">
      <Avatar src={avatarUrl} size={70} />
      <Stack gap={5}>
        <Text lh={"20px"} fw={isFocused ? 700 : 400} lineClamp={1}>
          {fullName}
        </Text>
        <Text
          fw={isFocused ? 700 : 400}
          ta={"center"}
          c={"blue.2"}
          lineClamp={1}
        >
          {role}
        </Text>
      </Stack>
    </Stack>
  );
};

export default AvatarWithLabel;
