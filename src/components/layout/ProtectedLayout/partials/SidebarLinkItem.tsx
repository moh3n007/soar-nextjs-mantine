// components
import Icon from "@/src/components/shared/Icon";
import { Box, Flex, Text, ThemeIcon } from "@mantine/core";
import Link from "next/link";

// hooks
import { usePathname } from "next/navigation";

// types
import type { SidebarLinkItemProps } from "@/src/types/sharedTypes";
import type { FC } from "react";

const SidebarLinkItem: FC<SidebarLinkItemProps> = (props) => {
  const { title, link, icon, onClick } = props;
  const pathname = usePathname();
  const focused = pathname === link;
  return (
    <Link href={link} className="flex" onClick={onClick}>
      <Flex
        px={40}
        py={18}
        gap={26}
        align={"center"}
        className="w-full relative"
        c={focused ? "gray.9" : "gray.4"}
      >
        {focused && (
          <Box
            w={12}
            h={"100%"}
            bg={"gray.9"}
            className="absolute -left-[6px] top-0 rounded-tr-md rounded-br-md"
          />
        )}
        <ThemeIcon variant="transparent" size={25} c={"inherit"}>
          <Icon icon={icon} size={25} />
        </ThemeIcon>
        <Text size="md">{title}</Text>
      </Flex>
    </Link>
  );
};

export default SidebarLinkItem;
