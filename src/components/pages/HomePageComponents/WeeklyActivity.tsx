"use client";

// components
import { BarChart } from "@mantine/charts";
import Section from "@shared/Section";

// constants
import { weeklyActivityData } from "@constants/fakeHomeData";

// hooks
import { useMatches } from "@mantine/core";

const WeeklyActivity = () => {
  const barSize = useMatches({
    base: 7,
    md: 15,
  });
  const barGap = useMatches({
    base: 5,
    md: 12,
  });
  return (
    <Section
      title="Weekly Activity"
      withBg
      classNames={{
        content: "max-md:!pt-2.5 max-md:!pb-10",
      }}
    >
      <BarChart
        strokeDasharray="1 0"
        h={{ base: 250, md: 300 }}
        w={"100%"}
        data={weeklyActivityData}
        dataKey="month"
        withLegend
        tooltipAnimationDuration={200}
        barChartProps={{ barGap }}
        barProps={{ radius: 100, barSize }}
        xAxisProps={{ padding: { left: 0, right: 0 } }}
        yAxisProps={{
          padding: { top: 0, bottom: 0 },
          domain: [0, 500],
          ticks: [0, 100, 200, 300, 400, 500],
        }}
        series={[
          { name: "Withdraw", color: "dark.9" },
          { name: "Deposit", color: "blue.6" },
        ]}
      />
    </Section>
  );
};

export default WeeklyActivity;
