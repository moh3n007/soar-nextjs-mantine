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
import type { SidebarLinkItemProps } from "@interfaces/sharedTypes";

// constants
import { ROUTES } from "./routes";

const sidebarLinks: SidebarLinkItemProps[] = [
  {
    link: ROUTES.DASHBOARD,
    title: "Dashboard",
    text: "Overview",
    icon: IconHome,
  },
  {
    link: ROUTES.TRANSACTIONS,
    title: "Transactions",
    icon: IconTransfer,
  },
  {
    link: ROUTES.ACCOUNTS,
    title: "Accounts",
    icon: IconUser,
  },
  {
    link: ROUTES.INVESTMENTS,
    title: "Investments",
    icon: IconEconomicInvestment,
  },
  {
    link: ROUTES.CREDIT_CARD,
    title: "Creadit Card",
    icon: IconCreditCard,
  },
  {
    link: ROUTES.LOANS,
    title: "Loans",
    icon: IconLoan,
  },
  {
    link: ROUTES.SERVICES,
    title: "Services",
    icon: IconService,
  },
  {
    link: ROUTES.MY_PRIVILEGES,
    title: "My Privileges",
    icon: IconEconometrics,
  },
  {
    link: ROUTES.SETTINGS,
    title: "Setting",
    icon: IconSettingsSolid,
  },
];

export default sidebarLinks;
