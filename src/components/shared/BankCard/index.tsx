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
        "bg-white rounded-3xl border border-solid border-gray-200 overflow-hidden",
        selected && "bg-gradient-to-l from-gray-900 to-gray-700",
        classNames?.root,
      )}
    >
      <Stack p={25} c={selected ? "gray.0" : "blue.9"} gap={35}>
        <Flex>
          <Stack gap={0} flex={1}>
            <Text size="xs" c={!selected ? "blue.2" : undefined}>
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
            <Text size="xs" c={!selected ? "blue.2" : undefined} lineClamp={1}>
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
            <Text size="xs" c={!selected ? "blue.2" : undefined} lineClamp={1}>
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
        px={25}
        py={12}
        align={"center"}
        justify={"space-between"}
      >
        <Text size="lg" className="text-inherit" lineClamp={1}>
          {maskCardNumber(item.cardNumber)}
        </Text>
        <Icon icon={IconMasterCard} size={44} />
      </Flex>
    </Stack>
  );
};

export default BankCard;
