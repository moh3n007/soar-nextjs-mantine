"use client";

// icons
import IconSend from "@icons/Send";

// types
import { QuickTransferFormData } from "@interfaces/pagesProps/homePageProps";

// components
import { Carousel } from "@mantine/carousel";
import { Button, Flex, NumberInput, Stack, Text } from "@mantine/core";
import AvatarWithLabel from "@shared/AvatarWithLabel";
import Icon from "@shared/Icon";
import Section from "@shared/Section";

// hooks
import { useForm } from "@mantine/form";

const QuickTransfer = () => {
  const { setFieldValue, values, onSubmit, isValid, getInputProps } = useForm({
    initialValues: {
      user: usersData[0],
      amount: 55.25,
    },
    validate: {
      amount: (value) => (!!value ? null : "Required"),
    },
  });

  const onTransfer = (values: QuickTransferFormData) =>
    alert(JSON.stringify(values));

  return (
    <Section
      title="Quick Transfer"
      withBg
      classNames={{ root: "h-full", content: "flex-1" }}
    >
      <Stack
        gap={30}
        justify="center"
        w={"100%"}
        component={"form"}
        onSubmit={onSubmit(onTransfer) as any}
      >
        <Carousel
          height={140}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
          w={"100%"}
        >
          {usersData.map((user) => (
            <Carousel.Slide key={`quick_transfer_user_${user.id}`}>
              <AvatarWithLabel
                {...user}
                isFocused={values.user.id === user.id}
                onClick={() => setFieldValue("user", user)}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Flex gap={24} align={"center"}>
          <Text
            component="label"
            htmlFor="transferInput"
            c={"blue.2"}
            lh={"20px"}
          >
            Write Amount
          </Text>
          <Flex
            align={"center"}
            flex={1}
            bg={"gray.2"}
            className="rounded-full"
            justify={"space-between"}
            pl={26}
          >
            <NumberInput
              variant="unstyled"
              placeholder="55.40"
              id="transferInput"
              miw={"unset"}
              w={70}
              classNames={{
                input: "text-[16px]",
              }}
              hideControls
              decimalScale={2}
              max={999}
              clampBehavior="strict"
              {...getInputProps("amount")}
            />
            <Button
              rightSection={<Icon icon={IconSend} />}
              radius={"xl"}
              variant="filled"
              color="dark"
              size="lg"
              type="submit"
              disabled={!isValid("amount")}
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Section>
  );
};

export default QuickTransfer;

const usersData = [
  {
    id: "1",
    fullName: "Livia Bator",
    role: "CEO",
    avatarUrl: "/user_avatar.jpeg",
  },
  {
    id: "2",
    fullName: "Randy Press",
    role: "Director",
    avatarUrl: "/user_avatar.jpeg",
  },
  {
    id: "3",
    fullName: "Workman",
    role: "Designer",
    avatarUrl: "/user_avatar.jpeg",
  },
  {
    id: "4",
    fullName: "James Ford",
    role: "Developer",
    avatarUrl: "/user_avatar.jpeg",
  },
];
