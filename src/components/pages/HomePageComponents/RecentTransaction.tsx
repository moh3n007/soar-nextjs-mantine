// components
import { Stack } from "@mantine/core";
import Section from "@shared/Section";
import TransactionItem from "@shared/TransactionItem";

// constants
import { transactionsDara } from "@constants/fakeHomeData";

const RecentTransaction = () => {
  return (
    <Section
      title="Recent Transaction"
      withBg
      classNames={{ root: "h-full", content: "flex-1" }}
    >
      <Stack gap={5} flex={1} justify="space-between">
        {transactionsDara.map((item, i) => (
          <TransactionItem key={`transaction_${item.title}_${i}`} {...item} />
        ))}
      </Stack>
    </Section>
  );
};

export default RecentTransaction;
