"use client";
// hooks
import { useMantineTheme, useMatches } from "@mantine/core";

// components
import Section from "@shared/Section";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// constants
import { balanceHistoryData } from "@constants/fakeHomeData";

const BalanceHistory = () => {
  const theme = useMantineTheme();
  const size = useMatches({
    base: 230,
    md: 300,
  });
  return (
    <Section
      title="Balance History"
      withBg
      classNames={{
        content: "max-md:!pt-1.5 max-md:!pb-9 max-md:!px-5",
      }}
    >
      <ResponsiveContainer width="100%" height={size}>
        <AreaChart
          width={500}
          height={400}
          data={balanceHistoryData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={theme.colors.indigo[4]}
                stopOpacity={0.8}
              />
              <stop
                offset="100%"
                stopColor={theme.colors.indigo[2]}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            type="bump"
            dataKey="Balance"
            stroke={theme.colors.indigo[6]}
            strokeWidth={3}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Section>
  );
};

export default BalanceHistory;
