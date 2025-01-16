// components
import { BarChart } from "@mantine/charts";
import Section from "@shared/Section";

// constants
import { weeklyActivityData } from "@constants/fakeHomeData";

const WeeklyActivity = () => {
  return (
    <Section title="Weekly Activity" withBg>
      <BarChart
        strokeDasharray="1 0"
        h={300}
        w={"100%"}
        data={weeklyActivityData}
        dataKey="month"
        withLegend
        tooltipAnimationDuration={200}
        barChartProps={{ barGap: 12 }}
        barProps={{ radius: 100, barSize: 15 }}
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
