import { ISidebarLinkItemProps } from "@molecules/ProtectedLayout/partials/SidebarLinkItem"
import IconHome from "../components/SVGs/Home"
import IconTransfer from "../components/SVGs/Transfer"
import IconUser from "../components/SVGs/User"
import IconEconomicInvestment from "../components/SVGs/EconomicInvestment"
import IconCreditCard from "../components/SVGs/CreditCard"
import IconLoan from "../components/SVGs/Loan"
import IconService from "../components/SVGs/Service"
import IconEconometrics from "../components/SVGs/Econometrics"
import IconSettingsSolid from "../components/SVGs/SettingsSolid"


const sidebarLinks: ISidebarLinkItemProps[] = [
    {
        link: "/",
        title: "dashboard",
        icon: IconHome
    },
    {
        link: "/transactions",
        title: "transactions",
        icon: IconTransfer
    },
    {
        link: "/accounts",
        title: "accounts",
        icon: IconUser
    },
    {
        link: "/investments",
        title: "investments",
        icon: IconEconomicInvestment
    },
    {
        link: "/credit-card",
        title: "credit_card",
        icon: IconCreditCard
    },
    {
        link: "/loans",
        title: "loans",
        icon: IconLoan
    },
    {
        link: "/services",
        title: "services",
        icon: IconService
    },
    {
        link: "/my-privileges",
        title: "my_privileges",
        icon: IconEconometrics
    },
    {
        link: "/settings",
        title: "settings",
        icon: IconSettingsSolid
    },
]

export default sidebarLinks