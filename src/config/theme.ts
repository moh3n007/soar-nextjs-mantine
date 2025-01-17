"use client";

// components
import {
  ActionIcon,
  Autocomplete,
  createTheme,
  Input,
  NumberInput,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

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
    200: "#EDF1F7",
    300: "#F4F5F7",
    400: "#B1B1B1",
  },
  red: {
    ...tailwindColors.red,
    600: "#FF4B4A",
  },
  slate: {
    ...tailwindColors.slate,
    200: "#DFEAF2",
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
        input: clsx(
          props.size === "lg"
            ? "text-[14px] leading-[19px] pl-[58px] pr-5"
            : "",
          props.size === "md"
            ? "text-[13px] leading-[16px] pl-[40px] pr-5"
            : "",
        ),
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
          props.size === "xs" && "text-[12px] leading-[14px] font-normal",
          props.size === "sm" && "text-[15px] leading-[18px] font-normal",
          props.size === "md" && "text-[18px] leading-[22px] font-medium",
          props.size === "lg" && "text-[22px] leading-[26px] font-semibold",
        ),
      }),
    }),
    TextInput: TextInput.extend({
      classNames: (_, props) => ({
        label:
          "text-base leading-5 mb-2.5 max-md:text-13 max-md:leading-[15px] max-md:mb-1.5",
        input:
          "rounded-xl h-[50px] text-base placeholder:text-gray-400 text-blue-200 border-slate-200 max-md:h-[40px] max-md:text-sm max-md:px-[15px]",
      }),
    }),
    PasswordInput: PasswordInput.extend({
      classNames: (_, props) => ({
        label:
          "text-base leading-5 mb-2.5 max-md:text-13 max-md:leading-[15px] max-md:mb-1.5",
        input:
          "rounded-xl h-[50px] text-base placeholder:text-gray-400 text-blue-200 border-slate-200 max-md:h-[40px] max-md:text-sm max-md:px-[15px]",
      }),
    }),
    DatePickerInput: DatePickerInput.extend({
      classNames: (_, props) => ({
        label:
          "text-base leading-5 mb-2.5 max-md:text-13 max-md:leading-[15px] max-md:mb-1.5",
        input:
          "rounded-xl h-[50px] text-base placeholder:text-gray-400 text-blue-200 border-slate-200 max-md:h-[40px] max-md:text-sm max-md:px-[15px]",
      }),
    }),
    Autocomplete: Autocomplete.extend({
      classNames: (_, props) => ({
        label:
          "text-base leading-5 mb-2.5 max-md:text-13 max-md:leading-[15px] max-md:mb-1.5",
        input:
          "rounded-xl h-[50px] text-base placeholder:text-gray-400 text-blue-200 border-slate-200 max-md:h-[40px] max-md:text-sm max-md:px-[15px]",
      }),
    }),
    NumberInput: NumberInput.extend({
      classNames: (_, props) => ({
        label:
          "text-base leading-5 mb-2.5 max-md:text-13 max-md:leading-[15px] max-md:mb-1.5",
        input:
          "rounded-xl h-[50px] text-base placeholder:text-gray-400 text-blue-200 border-slate-200 max-md:h-[40px] max-md:text-sm max-md:px-[15px]",
      }),
    }),
  },
  fontFamily: "inherit",
});
