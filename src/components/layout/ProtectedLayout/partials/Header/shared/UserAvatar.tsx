// components
import { Avatar, AvatarProps } from "@mantine/core";
import Link from "next/link";

// constants
import { ROUTES } from "@constants/routes";

const UserAvatar = (props: AvatarProps) => {
  return (
    <Link href={ROUTES.SETTINGS}>
      <Avatar {...props} size={props.size ?? 35} src={"/user_1.jpeg"} />
    </Link>
  );
};

export default UserAvatar;
