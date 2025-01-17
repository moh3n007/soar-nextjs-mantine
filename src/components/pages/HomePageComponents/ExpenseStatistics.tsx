"use client";
// components
import { PieChart } from "@mantine/charts";
import { Flex } from "@mantine/core";
import Section from "@shared/Section";

// hooks
import { useMatches } from "@mantine/core";

// constants
import { expenseStatistics } from "@constants/fakeHomeData";

const ExpenseStatistics = () => {
  const size = useMatches({
    base: 200,
    md: 270,
  });
  return (
    <Section
      title="Expense Statistics"
      withBg
      classNames={{
        root: "h-full",
        content: "flex-1 max-md:!pt-3 max-md:!pb-11",
      }}
    >
      <Flex justify={"center"} align={"center"} flex={1}>
        <PieChart
          withTooltip
          tooltipDataSource="segment"
          labelsPosition="inside"
          labelsType="percent"
          withLabels
          data={expenseStatistics}
          size={size}
          strokeWidth={6}
          classNames={{ root: "[&_text]:fill-white" }}
        />
      </Flex>
    </Section>
  );
};

export default ExpenseStatistics;
