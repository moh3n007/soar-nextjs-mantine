"use client";

// components
import { ActionIcon, createTheme, Input, Text } from "@mantine/core";

// Mantine default theme
import { DEFAULT_THEME } from "@mantine/core";

// TailwindCSS default theme
import tailwindColors from "tailwindcss/colors";

// types
import type { DefaultColors } from "tailwindcss/types/generated/colors";

// helper funcs
import clsx from "clsx";

function transformColors(input: DefaultColors) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const output: any = {};
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "object") output[key] = Object.values(value);
  }
  return output;
}

const customizedTailwindColors = {
  ...tailwindColors,
  blue: {
    ...tailwindColors.blue,
    200: "#718EBF",
    600: "#396AFF",
    900: "#343C6A",
  },
  gray: {
    ...tailwindColors.gray,
    100: "#F5F7FA",
    400: "#B1B1B1",
  },
};

const colors = transformColors(customizedTailwindColors as DefaultColors);

export const theme = createTheme({
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    ...colors,
  },
  components: {
    Input: Input.extend({
      classNames: (_, props) => ({
        input:
          props.size === "lg"
            ? "text-[14px] leading-[19px] pl-[58px] pr-5"
            : "",
        section: props.size === "lg" ? "pl-5" : "",
      }),
    }),
    ActionIcon: ActionIcon.extend({
      classNames: (_, props) => ({
        root: clsx(
          props.variant === "light" && "bg-gray-100",
          props.size === "lg" &&
            "w-[50px] h-[50px] [&_svg]:w-[25px] [&_svg]:h-[25px]",
        ),
      }),
    }),
    Text: Text.extend({
      classNames: (_, props) => ({
        root: clsx(
          props.size === "md" && "text-[18px] leading-[22px] font-medium",
        ),
      }),
    }),
  },
  fontFamily: "inherit",
});
