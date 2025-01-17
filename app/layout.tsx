// css styles
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "./globals.css";

// types
import type { PropsWithChildren } from "react";

// Mantine configs
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

// components
import Providers from "@components/providers";

export const metadata = {
  title: "Soar Task",
  description: "This is a task implemented by Mohsen Lotfi",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
