// types
import type { IconSVGProps, UserData } from "@interfaces/commonProps";
import type { BankCardProps, TransactionProps } from "@interfaces/sharedTypes";
import type { MantineColor } from "@mantine/core";

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

export interface TransactionItemProps extends TransactionProps {
  icon: IconSVGProps;
  color: MantineColor;
}

export interface QuickTransferFormData {
  user: UserData;
  amount: number;
}
