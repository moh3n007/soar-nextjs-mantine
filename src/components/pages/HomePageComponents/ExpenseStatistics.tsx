// components
import { PieChart } from "@mantine/charts";
import { Flex } from "@mantine/core";
import Section from "@shared/Section";

// constants
import { expenseStatistics } from "@constants/fakeHomeData";

const ExpenseStatistics = () => {
  return (
    <Section
      title="Expense Statistics"
      withBg
      classNames={{ root: "h-full", content: "flex-1" }}
    >
      <Flex justify={"center"} align={"center"} flex={1}>
        <PieChart
          withTooltip
          tooltipDataSource="segment"
          labelsPosition="inside"
          labelsType="percent"
          withLabels
          data={expenseStatistics}
          size={270}
          strokeWidth={6}
          classNames={{ root: "[&_text]:fill-white" }}
        />
      </Flex>
    </Section>
  );
};

export default ExpenseStatistics;
