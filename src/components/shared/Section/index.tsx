// components
import { Flex, Stack, Text } from "@mantine/core";

// helper funcs
import clsx from "clsx";

// types
import type { SectionProps } from "@interfaces/sharedTypes";
import type { FC } from "react";

const Section: FC<SectionProps> = (props) => {
  const { title, withBg, classNames, children, action } = props;
  return (
    <Stack className={clsx(classNames?.root)} gap={20}>
      <Flex align={"center"} px={{ base: 25, md: 0 }}>
        {title && (
          <Text
            className={clsx(
              "text-base leading-5 font-semibold min-md:text-22 min-md:leading-lg",
              classNames?.title,
            )}
          >
            {title}
          </Text>
        )}
        {action}
      </Flex>
      <Flex
        p={withBg ? 25 : 0}
        className={clsx(
          withBg ? "bg-white rounded-3xl" : "",
          classNames?.content,
        )}
      >
        {children}
      </Flex>
    </Stack>
  );
};

export default Section;
