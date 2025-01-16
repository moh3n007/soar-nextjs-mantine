// components
import BalanceHistory from "@components/pages/HomePageComponents/BalanceHistory";
import ExpenseStatistics from "@components/pages/HomePageComponents/ExpenseStatistics";
import HomePageStructure from "@components/pages/HomePageComponents/HomePageStructure";
import HomePageMyCards from "@components/pages/HomePageComponents/MyCards";
import RecentTransaction from "@components/pages/HomePageComponents/RecentTransaction";
import WeeklyActivity from "@components/pages/HomePageComponents/WeeklyActivity";
import { Stack, Text } from "@mantine/core";

export const metadata = {
  title: "Soar Task | Home",
};

export default function Home() {
  return (
    <Stack px={40} py={24}>
      <HomePageStructure
        myCards={<HomePageMyCards />}
        recentTransaction={<RecentTransaction />}
        weeklyActivity={<WeeklyActivity />}
        expenseStatistics={<ExpenseStatistics />}
        quickTransfer={<Text>Transaction</Text>}
        balanceHistory={<BalanceHistory />}
      />
    </Stack>
  );
}
