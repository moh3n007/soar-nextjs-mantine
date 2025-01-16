export interface BankCardProps {
  balance: number;
  cardHolder: string;
  validDate: string;
  cardNumber: string;
}

export interface TransactionProps {
  variant: "deposit" | "withdraw";
  amount: number;
  date: string;
  title: string;
}
