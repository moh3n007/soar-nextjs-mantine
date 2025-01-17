"use client";
// constants
import { myCardsData } from "@constants/fakeHomeData";

// components
import { Flex, ScrollArea, Text } from "@mantine/core";
import BankCard from "@shared/BankCard";
import Section from "@shared/Section";
import Link from "next/link";

const HomePageMyCards = () => {
  return (
    <Section
      title="My Cards"
      action={
        <Link className="ml-auto" href="/">
          <Text
            size="sm"
            className="min-md:text-[22px] min-md:font-semibold"
            lh={"20px"}
          >
            See All
          </Text>
        </Link>
      }
      classNames={{ root: "mb-[22px] md:mb-0" }}
    >
      <ScrollArea w={"100%"} scrollbars="x">
        <Flex
          flex={1}
          justify={{ md: "space-between" }}
          px={{ base: 25, md: 0 }}
          gap={30}
          className="max-md:!gap-5"
        >
          {myCardsData.map((card, index) => (
            <BankCard
              item={card}
              key={`my_card_${card.cardNumber}`}
              classNames={{ root: "w-full" }}
              selected={index === 0}
            />
          ))}
        </Flex>
      </ScrollArea>
    </Section>
  );
};

export default HomePageMyCards;
