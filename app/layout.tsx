import "@mantine/core/styles.css";
import "./globals.css"
import React, { PropsWithChildren } from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "@/src/config/theme";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}