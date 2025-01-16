// types
import type { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  title?: string;
  withBg?: boolean;
  classNames?: {
    root?: string;
    title?: string;
    content?: string;
  };
  action?: React.ReactNode;
}
