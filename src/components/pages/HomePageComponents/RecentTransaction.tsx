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
      classNames={{
        root: "h-full pb-[22px] md:mb-0",
        content: "flex-1 max-md:!py-5",
      }}
    >
      <Stack
        flex={1}
        justify="space-between"
        px={{ base: 18, md: 0 }}
        className="gap-2.5 max-md:!gap-3 max-md:!justify-normal"
      >
        {transactionsDara.map((item, i) => (
          <TransactionItem key={`transaction_${item.title}_${i}`} {...item} />
        ))}
      </Stack>
    </Section>
  );
};

export default RecentTransaction;
