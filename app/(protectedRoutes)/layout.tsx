// components
import ProtectedLayout from "@/src/components/layout/ProtectedLayout";

// types
import type { PropsWithChildren } from "react";

const ProtectedRoutesLayout = ({ children }: PropsWithChildren) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default ProtectedRoutesLayout;
