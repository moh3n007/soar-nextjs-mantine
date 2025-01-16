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

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const headerTitle = useMemo(() => {
    const focusedLink = sidebarLinks.find((link) => link.link === pathname);
    return focusedLink?.text ?? focusedLink?.title;
  }, [pathname]);

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 60, md: 100 } }}
      navbar={{ width: 250, breakpoint: "md", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header title={headerTitle} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggleMenu={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default ProtectedLayout;
