// types
import type { AvatarWithLabelProps } from "@interfaces/sharedTypes";
import type { FC } from "react";

// components
import { Avatar, Stack, Text } from "@mantine/core";

const AvatarWithLabel: FC<AvatarWithLabelProps> = (props) => {
  const { avatarUrl, fullName, role, isFocused, ...rext } = props;
  return (
    <Stack {...rext} align="center" className="cursor-pointer max-md:!gap-3">
      <Avatar
        src={avatarUrl}
        size={70}
        className="max-md:!min-w-[50px] max-md:!min-h-[50px] max-md:!w-[50px] max-md:!h-[50px]"
      />
      <Stack gap={5} className="max-md:!gap-0">
        <Text
          lh={"20px"}
          fw={isFocused ? 700 : 400}
          lineClamp={1}
          className="max-md:text-xs max-md:!leading-3.5"
        >
          {fullName}
        </Text>
        <Text
          fw={isFocused ? 700 : 400}
          ta={"center"}
          c={"blue.2"}
          lineClamp={1}
          className="max-md:text-xs max-md:!leading-3.5"
        >
          {role}
        </Text>
      </Stack>
    </Stack>
  );
};

export default AvatarWithLabel;
