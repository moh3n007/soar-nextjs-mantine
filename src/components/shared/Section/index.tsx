// components
import { Flex, Stack, Text } from "@mantine/core";

// helper funcs
import clsx from "clsx";

// types
import type { SectionProps } from "@interfaces/sharedTypes/sectionProps";
import type { FC } from "react";

const Section: FC<SectionProps> = (props) => {
  const { title, withBg, classNames, children, action } = props;
  return (
    <Stack className={clsx(classNames?.root)} gap={20}>
      <Flex align={"center"}>
        {title && (
          <Text size="lg" className={clsx(classNames?.title)}>
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
