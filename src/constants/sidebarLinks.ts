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
    title: "dashboard",
    text: "overview",
    icon: IconHome,
  },
  {
    link: "/transactions",
    title: "transactions",
    icon: IconTransfer,
  },
  {
    link: "/accounts",
    title: "accounts",
    icon: IconUser,
  },
  {
    link: "/investments",
    title: "investments",
    icon: IconEconomicInvestment,
  },
  {
    link: "/credit-card",
    title: "credit_card",
    icon: IconCreditCard,
  },
  {
    link: "/loans",
    title: "loans",
    icon: IconLoan,
  },
  {
    link: "/services",
    title: "services",
    icon: IconService,
  },
  {
    link: "/my-privileges",
    title: "my_privileges",
    icon: IconEconometrics,
  },
  {
    link: "/settings",
    title: "setting",
    icon: IconSettingsSolid,
  },
];

export default sidebarLinks;
