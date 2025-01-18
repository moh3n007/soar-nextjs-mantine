"use client";

// components
import { AppShell } from "@mantine/core";
import Header from "./partials/Header";
import Navbar from "./partials/Sidebar";

// hooks
import { useDisclosure } from "@mantine/hooks";

// types
import type { PropsWithChildren } from "react";

// constants
import sidebarLinks from "@constants/sidebarLinks";

// hooks
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import useBreakpoint from "@hooks/useBreakpoint";

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const { isSmallerThanMd } = useBreakpoint();

  const headerTitle = useMemo(() => {
    const focusedLink = sidebarLinks.find((link) => link.link === pathname);
    return focusedLink?.text ?? focusedLink?.title;
  }, [pathname]);

  const handleToggleMenu = isSmallerThanMd ? toggle : undefined;

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 140, md: 100 } }}
      navbar={{ width: 250, breakpoint: "md", collapsed: { mobile: !opened } }}
      classNames={{
        navbar: "border-gray-200",
        header: "border-transparent md:border-gray-200",
      }}
    >
      <AppShell.Header>
        <Header title={headerTitle} toggleMenu={handleToggleMenu} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggleMenu={handleToggleMenu} />
      </AppShell.Navbar>
      <AppShell.Main className="bg-white md:bg-gray-100">
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default ProtectedLayout;
