import ProtectedLayout from "@/src/components/molecules/ProtectedLayout";
import * as React from "react";


const ProtectedRoutesLayout = ({children}: React.PropsWithChildren) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default ProtectedRoutesLayout;
