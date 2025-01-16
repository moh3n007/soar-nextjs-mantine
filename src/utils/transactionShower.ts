import { TransactionType } from "@interfaces/commonProps";

export default function transactionShower(
  amount: number,
  variant: TransactionType,
  currency: string,
) {
  const sign = variant === "deposit" ? "-" : "+";

  return `${sign}${currency}${amount.toLocaleString()}`;
}
