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
      <ThemeIcon bg={`${color}.0`} radius={"xl"} size={55} mr={18}>
        <Icon icon={icon} color={`${color}.5`} size={28} />
      </ThemeIcon>

      <Stack gap={0} mr={12} justify="center">
        <Text lineClamp={1} fw={500} lh={"20px"}>
          {title}
        </Text>
        <Text size="sm" mt={8} c={"blue.2"} lineClamp={1}>
          {date}
        </Text>
      </Stack>
      <Text ml={"auto"} c={variant === "deposit" ? "red" : "green"}>
        {transactionShower(amount, variant, "$")}
      </Text>
    </Flex>
  );
};

export default TransactionItem;
