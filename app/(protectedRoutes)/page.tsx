// components
import HomePageStructure from "@components/pages/HomePageComponents/HomePageStructure";
import HomePageMyCards from "@components/pages/HomePageComponents/MyCards";
import RecentTransaction from "@components/pages/HomePageComponents/RecentTransaction";
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
        balanceHistory={<Text>Transaction</Text>}
        expenseStatistics={<Text>Transaction</Text>}
        quickTransfer={<Text>Transaction</Text>}
        weeklyActivity={<Text>Transaction</Text>}
      />
    </Stack>
  );
}
