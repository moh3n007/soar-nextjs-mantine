"use client";

// types
import type { SettingTabProps } from "@interfaces/pagesProps/settingPageProps";

// components
import { Tabs, Text } from "@mantine/core";
import Section from "@shared/Section";
import SettingEditProfile from "./SettingMainBox/SettingEditProfile";

const SettingMainBox = () => {
  return (
    <Section
      withBg
      classNames={{
        root: "px-10 pt-[30px] min-h-[720px] max-md:h-auto max-md:p-[25px] max-md:bg-gray-100",
        content: "flex-1 max-md:!px-5 max-md:!px-[22px]",
      }}
      hideTitleBox
    >
      <Tabs
        defaultValue="edit_profile"
        flex={1}
        classNames={{
          list: "before:border-gray-300",
          tab: "data-active:border-b-[3px] text-blue-200 data-active:text-gray-900 font-medium max-md:px-1.5 max-md:py-2 max-md:w-1/3",
        }}
        color="gray"
      >
        <Tabs.List>
          {settingTabs.map((tab) => (
            <Tabs.Tab key={`settings_tab_${tab.value}`} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Tabs.Panel value="edit_profile">
          <SettingEditProfile />
        </Tabs.Panel>
        <Tabs.Panel value="preferences">
          <Text>Preferences Tab</Text>
        </Tabs.Panel>
        <Tabs.Panel value="security">
          <Text>Security Tab</Text>
        </Tabs.Panel>
      </Tabs>
    </Section>
  );
};

export default SettingMainBox;

const settingTabs: SettingTabProps[] = [
  {
    label: "Edit profile",
    value: "edit_profile",
  },
  {
    label: "Preferences",
    value: "preferences",
  },
  {
    label: "Security",
    value: "security",
  },
];
