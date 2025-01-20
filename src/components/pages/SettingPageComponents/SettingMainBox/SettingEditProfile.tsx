"use client";

// icons
import IconEdit from "@icons/Edit";

// components
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Flex,
  Indicator,
  Input,
  NumberInput,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import Icon from "@shared/Icon";
import { DatePickerInput } from "@mantine/dates";

// constants
import { addresses, cities, countries } from "@constants/fakeLocationsData";

// hooks
import { useForm } from "@mantine/form";

// types
import type { ProfileFormData } from "@interfaces/pagesProps/settingPageProps";

const SettingEditProfile = () => {
  const { getInputProps, onSubmit } = useForm<ProfileFormData>({
    initialValues: {
      name: "Charlene Reed",
      username: "Charlene Reed",
      email: "charlenereed@gmail.com",
      password: "123456789",
      dateOfBirth: new Date(),
      presentAddress: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      city: "San Jose",
      postalCode: 45962,
      country: "USA",
    },
  });

  const onEdit = (data: ProfileFormData) => alert(JSON.stringify(data));

  return (
    <Stack
      px={{ base: 0, md: 30 }}
      pt={{ base: 45, md: 40 }}
      pb={{ base: 0, md: 40 }}
      gap={40}
      component="form"
      onSubmit={onSubmit(onEdit) as any}
      className="max-md:!gap-4"
    >
      <Flex
        gap={{ base: 22, md: 65 }}
        className="flex-row max-md:items-center max-md:flex-col"
      >
        <Box h={"fit-content"}>
          <Indicator
            inline
            size={30}
            offset={12}
            position="bottom-end"
            color="gray.9"
            withBorder
            label={<Icon icon={IconEdit} size={15} />}
            zIndex={100}
          >
            <Box
              component="label"
              htmlFor="user_avatar"
              className="cursor-pointer"
            >
              <Avatar
                size={90}
                radius={100}
                src="/user_1.jpeg"
                className="max-md:w-[100px] max-md:h-[100px]"
              />
              <Input
                className="invisible !absolute top-0 left-0"
                id="user_avatar"
                type="file"
                accept="image/*"
              />
            </Box>
          </Indicator>
        </Box>
        <SimpleGrid
          flex={1}
          cols={{ base: 1, md: 2 }}
          spacing={30}
          verticalSpacing={{ base: 16, md: 22 }}
          w={{ base: "100%", md: "unset" }}
        >
          <TextInput
            label="Your name"
            placeholder="Charlene Reed"
            {...getInputProps("name")}
          />
          <TextInput
            label="User name"
            placeholder="Charlene Reed"
            {...getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="charlenereed@gmail.com"
            type="email"
            {...getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="*********"
            {...getInputProps("password")}
          />
          <DatePickerInput
            label="Date of Birth"
            placeholder="Pick date"
            valueFormat="DD MMMM YYYY"
            {...getInputProps("dateOfBirth")}
          />
          <Autocomplete
            label="Present Address"
            placeholder="Enter your address"
            data={addresses}
            {...getInputProps("presentAddress")}
          />
          <Autocomplete
            label="Permanent Address"
            placeholder="Enter your address"
            data={addresses}
            {...getInputProps("permanentAddress")}
          />
          <Autocomplete
            label="City"
            placeholder="Enter your city"
            data={cities}
            {...getInputProps("city")}
          />
          <NumberInput
            hideControls
            label="Postal Code"
            placeholder="Enter your postal code"
            {...getInputProps("postalCode")}
          />
          <Autocomplete
            label="Country"
            placeholder="Enter your city"
            data={countries}
            {...getInputProps("country")}
          />
        </SimpleGrid>
      </Flex>
      <Button
        size="lg"
        ml="auto"
        radius={"lg"}
        miw={190}
        bg={"gray.9"}
        type="submit"
        className="max-md:rounded-xl max-md:w-full max-md:h-[40px] max-md:text-base"
      >
        Save
      </Button>
    </Stack>
  );
};

export default SettingEditProfile;
