// types
import { BankCardComponentProps } from "@interfaces/pagesProps/homePageProps";
import type { FC } from "react";

// icons
import IconMasterCard from "@icons/MasterCard";

// components
import { Flex, Stack, Text } from "@mantine/core";
import Icon from "@shared/Icon";
import Image from "next/image";

// helper funcs
import clsx from "clsx";
import maskCardNumber from "@utils/maskCardNumber";

const BankCard: FC<BankCardComponentProps> = (props) => {
  const { item, classNames, selected } = props;
  return (
    <Stack
      className={clsx(
        "bg-white rounded-3xl border border-solid border-gray-200 overflow-hidden max-md:gap-0",
        selected && "bg-gradient-to-l from-gray-900 to-gray-700",
        classNames?.root,
      )}
      w={{ base: 265, md: "100%" }}
    >
      <Stack
        px={{ base: 20, md: 25 }}
        py={{ base: 16, md: 25 }}
        c={selected ? "gray.0" : "blue.9"}
        gap={35}
        className="max-md:gap-lg"
      >
        <Flex>
          <Stack gap={0} flex={1}>
            <Text
              size="xs"
              c={!selected ? "blue.2" : undefined}
              className="max-md:text-11 max-md:leading-sm max-md:font-normal"
            >
              Balance
            </Text>
            <Text
              lh={"24px"}
              fw={600}
              className="text-xl text-inherit"
            >{`$${item.balance}`}</Text>
          </Stack>
          <Image
            src={"/chip.png"}
            width={36}
            height={34}
            alt="chip_card"
            className={!selected ? "invert" : ""}
          />
        </Flex>
        <Flex>
          <Stack flex={1} gap={2}>
            <Text
              size="xs"
              c={!selected ? "blue.2" : undefined}
              lineClamp={1}
              className="max-md:text-10 max-md:leading-3 max-md:font-normal"
            >
              CARD HOLDER
            </Text>
            <Text
              lh={"18px"}
              fw={600}
              className="text-[15px] text-inherit"
              lineClamp={1}
            >
              {item.cardHolder}
            </Text>
          </Stack>
          <Stack flex={1} gap={2}>
            <Text
              size="xs"
              c={!selected ? "blue.2" : undefined}
              lineClamp={1}
              className="max-md:text-10 max-md:leading-3 max-md:font-normal"
            >
              VALID THRU
            </Text>
            <Text
              lh={"18px"}
              fw={600}
              className="text-[15px] text-inherit"
              lineClamp={1}
            >
              {item.validDate}
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Flex
        c={selected ? "gray.0" : "blue.9"}
        className={
          selected
            ? "bg-gradient-to-tl from-gray-900 to-gray-500"
            : "border-t border-solid border-gray-200"
        }
        px={{ base: 20, md: 25 }}
        py={{ base: 16, md: 12 }}
        align={"center"}
        justify={"space-between"}
      >
        <Text
          size="lg"
          className="text-inherit max-md:text-15 max-md:leading-md"
          lineClamp={1}
        >
          {maskCardNumber(item.cardNumber)}
        </Text>
        <Icon
          icon={IconMasterCard}
          size={44}
          className="max-md:w-7 max-md:h-7"
        />
      </Flex>
    </Stack>
  );
};

export default BankCard;
