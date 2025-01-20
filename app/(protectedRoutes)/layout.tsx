// components
import ProtectedLayout from "@/src/components/layout/ProtectedLayout";

// types
import type { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

const ProtectedRoutesLayout = ({ children }: PropsWithChildren) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default ProtectedRoutesLayout;
