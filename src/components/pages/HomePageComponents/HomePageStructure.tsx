"use client";

// types
import type { HomePageStructureProps } from "@interfaces/pagesProps/homePageProps";
import type { FC } from "react";

// components
import { Grid } from "@mantine/core";

const HomePageStructure: FC<HomePageStructureProps> = (props) => {
  const {
    balanceHistory,
    expenseStatistics,
    myCards,
    quickTransfer,
    recentTransaction,
    weeklyActivity,
  } = props;
  return (
    <Grid gutter={{ sm: 22, md: 30 }}>
      <Grid.Col span={{ sm: 12, md: 8 }}>{myCards}</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 4 }}>{recentTransaction}</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 8 }}>{weeklyActivity}</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 4 }}>{expenseStatistics}</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 5 }}>{quickTransfer}</Grid.Col>
      <Grid.Col span={{ sm: 12, md: 7 }}>{balanceHistory}</Grid.Col>
    </Grid>
  );
};

export default HomePageStructure;
