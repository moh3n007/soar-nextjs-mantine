// types
import type { BankCardProps } from "@interfaces/sharedTypes/bankCardProps";
import type { TransactionItemProps } from "@interfaces/pagesProps/homePageProps";

// icons
import IconBusinessCard from "@icons/BusinessCard";
import IconFinder from "@icons/Finder";
import IconPaypal from "@icons/Paypal";

const myCardsData: BankCardProps[] = [
  {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validDate: "12/22",

    cardNumber: "3778123456781234",
  },
  {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validDate: "12/22",

    cardNumber: "3778567812341234",
  },
];

const transactionsDara: TransactionItemProps[] = [
  {
    icon: IconBusinessCard,
    title: "Deposit from my card",
    amount: 850,
    variant: "deposit",
    date: "28 January 2021",
    color: "yellow",
  },
  {
    icon: IconPaypal,
    title: "Deposit Paypal",
    amount: 2500,
    variant: "withdraw",
    date: "25 January 2021",
    color: "blue",
  },
  {
    icon: IconFinder,
    title: "Jemi Wilson",
    amount: 5400,
    variant: "withdraw",
    date: "21 January 2021",
    color: "cyan",
  },
];

export { myCardsData, transactionsDara };
