// types
import type { TransactionItemProps } from "@interfaces/pagesProps/homePageProps";
import type { FC } from "react";

// components
import { Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import Icon from "@shared/Icon";

// helper funcs
import transactionShower from "@utils/transactionShower";

const TransactionItem: FC<TransactionItemProps> = (props) => {
  const { amount, icon, variant, date, title, color } = props;
  return (
    <Flex h={"fit-content"} align={"center"}>
      <ThemeIcon
        bg={`${color}.0`}
        radius={"xl"}
        size={55}
        mr={18}
        className="max-md:!min-w-[50px] max-md:!min-h-[50px] max-md:!w-[50px] max-md:!h-[50px] max-md:!mr-3.5"
      >
        <Icon
          icon={icon}
          color={`${color}.5`}
          size={28}
          className="max-md:w-6 max-md:h-6"
        />
      </ThemeIcon>

      <Stack gap={0} mr={12} justify="center">
        <Text
          lineClamp={1}
          fw={500}
          lh={"20px"}
          className="max-md:text-sm max-md:!leading-4"
        >
          {title}
        </Text>
        <Text
          size="sm"
          mt={8}
          c={"blue.2"}
          lineClamp={1}
          className="max-md:text-xs max-md:!leading-3.5 max-md:!mt-1"
        >
          {date}
        </Text>
      </Stack>
      <Text
        ml={"auto"}
        c={variant === "deposit" ? "red" : "green"}
        className="max-md:text-11 max-md:!leading-[13px] max-md:font-medium"
      >
        {transactionShower(amount, variant, "$")}
      </Text>
    </Flex>
  );
};

export default TransactionItem;
