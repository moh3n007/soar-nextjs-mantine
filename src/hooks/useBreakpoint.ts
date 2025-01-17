// hooks
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function useBreakpoint() {
  const theme = useMantineTheme();
  const isSmallerThanMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return { isSmallerThanMd };
}
