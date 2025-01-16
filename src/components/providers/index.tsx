// configurations
import { theme } from "@config/theme";

// providers
import { MantineProvider } from "@mantine/core";

// types
import type { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default Providers;
