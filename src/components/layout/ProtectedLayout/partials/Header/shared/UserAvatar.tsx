// components
import { Avatar } from "@mantine/core";
import Link from "next/link";

// constants
import { ROUTES } from "@constants/routes";

const UserAvatar = () => {
  return (
    <Link href={ROUTES.SETTINGS}>
      <Avatar size={35} src={"/user_avatar.jpeg"} />
    </Link>
  );
};

export default UserAvatar;
