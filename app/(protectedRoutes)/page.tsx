// components
import BalanceHistory from "@components/pages/HomePageComponents/BalanceHistory";
import ExpenseStatistics from "@components/pages/HomePageComponents/ExpenseStatistics";
import HomePageStructure from "@components/pages/HomePageComponents/HomePageStructure";
import HomePageMyCards from "@components/pages/HomePageComponents/MyCards";
import QuickTransfer from "@components/pages/HomePageComponents/QuickTransfer";
import RecentTransaction from "@components/pages/HomePageComponents/RecentTransaction";
import WeeklyActivity from "@components/pages/HomePageComponents/WeeklyActivity";
import { Stack } from "@mantine/core";

// types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soar Task | Home",
};

export default function Home() {
  return (
    <Stack px={{ base: 0, md: 40 }} py={{ base: 0, md: 24 }}>
      <HomePageStructure
        myCards={<HomePageMyCards />}
        recentTransaction={<RecentTransaction />}
        weeklyActivity={<WeeklyActivity />}
        expenseStatistics={<ExpenseStatistics />}
        quickTransfer={<QuickTransfer />}
        balanceHistory={<BalanceHistory />}
      />
    </Stack>
  );
}
