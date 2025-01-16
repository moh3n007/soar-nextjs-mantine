// constants
import { myCardsData } from "@constants/fakeHomeData";

// components
import { Text } from "@mantine/core";
import BankCard from "@shared/BankCard";
import Section from "@shared/Section";
import Link from "next/link";

const HomePageMyCards = () => {
  return (
    <Section
      title="My Cards"
      classNames={{ content: "gap-[30px]" }}
      action={
        <Link className="ml-auto" href="/">
          <Text size="lg" className="text-[17px]" lh={"20px"}>
            See All
          </Text>
        </Link>
      }
    >
      {myCardsData.map((card, index) => (
        <BankCard
          item={card}
          key={`my_card_${card.cardNumber}`}
          classNames={{ root: "w-full" }}
          selected={index === 0}
        />
      ))}
    </Section>
  );
};

export default HomePageMyCards;
