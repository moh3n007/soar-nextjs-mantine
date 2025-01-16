// types
import type { BankCardProps } from "@interfaces/sharedTypes/bankCardProps";

export interface HomePageStructureProps {
  myCards: React.ReactNode;
  recentTransaction: React.ReactNode;
  weeklyActivity: React.ReactNode;
  expenseStatistics: React.ReactNode;
  quickTransfer: React.ReactNode;
  balanceHistory: React.ReactNode;
}

export interface BankCardComponentProps {
  item: BankCardProps;
  classNames?: {
    root?: string;
  };
  selected?: boolean;
}
