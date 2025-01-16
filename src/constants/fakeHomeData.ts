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

const weeklyActivityData = [
  { month: "Sat", Withdraw: 480, Deposit: 240 },
  { month: "Sun", Withdraw: 350, Deposit: 120 },
  { month: "Mon", Withdraw: 330, Deposit: 280 },
  { month: "Tue", Withdraw: 490, Deposit: 380 },
  { month: "Wed", Withdraw: 150, Deposit: 240 },
  { month: "Thu", Withdraw: 390, Deposit: 240 },
  { month: "Fri", Withdraw: 400, Deposit: 330 },
];

const expenseStatistics = [
  { name: "Entertainment", value: 25, color: "indigo.9" },
  { name: "Bill Espense", value: 15, color: "orange.6" },
  { name: "Investment", value: 35, color: "blue.6" },
  { name: "Others", value: 25, color: "dark.9" },
];

const balanceHistoryData = [
  {
    date: "Jul",
    Balance: 160,
  },
  {
    date: "Aug",
    Balance: 230,
  },
  {
    date: "Sep",
    Balance: 430,
  },
  {
    date: "Oct",
    Balance: 790,
  },
  {
    date: "Nov",
    Balance: 210,
  },
  {
    date: "Dec",
    Balance: 580,
  },
  {
    date: "Jan",
    Balance: 230,
  },
];

export {
  myCardsData,
  transactionsDara,
  weeklyActivityData,
  expenseStatistics,
  balanceHistoryData,
};
