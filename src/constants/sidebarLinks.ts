// icons
import IconHome from "@icons/Home";
import IconTransfer from "@icons/Transfer";
import IconUser from "@icons/User";
import IconEconomicInvestment from "@icons/EconomicInvestment";
import IconCreditCard from "@icons/CreditCard";
import IconLoan from "@icons/Loan";
import IconService from "@icons/Service";
import IconEconometrics from "@icons/Econometrics";
import IconSettingsSolid from "@icons/SettingsSolid";

// types
import type { ISidebarLinkItemProps } from "@interfaces/sharedTypes/layoutProps";

const sidebarLinks: ISidebarLinkItemProps[] = [
  {
    link: "/",
    title: "Dashboard",
    text: "Overview",
    icon: IconHome,
  },
  {
    link: "/transactions",
    title: "Transactions",
    icon: IconTransfer,
  },
  {
    link: "/accounts",
    title: "Accounts",
    icon: IconUser,
  },
  {
    link: "/investments",
    title: "Investments",
    icon: IconEconomicInvestment,
  },
  {
    link: "/credit-card",
    title: "Creadit Card",
    icon: IconCreditCard,
  },
  {
    link: "/loans",
    title: "Loans",
    icon: IconLoan,
  },
  {
    link: "/services",
    title: "Services",
    icon: IconService,
  },
  {
    link: "/my-privileges",
    title: "My Privileges",
    icon: IconEconometrics,
  },
  {
    link: "/settings",
    title: "Setting",
    icon: IconSettingsSolid,
  },
];

export default sidebarLinks;
