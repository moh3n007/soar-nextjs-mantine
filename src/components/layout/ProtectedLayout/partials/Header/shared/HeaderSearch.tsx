// components
import { Input } from "@mantine/core";
import Icon from "@shared/Icon";

// icons
import IconMagnifyingGlass from "@icons/MagnifyingGlass";

const HeaderSearch = () => {
  return (
    <Input
      radius="xl"
      size="md"
      variant="filled"
      placeholder="Search for something"
      leftSection={
        <Icon icon={IconMagnifyingGlass} size={16} color={"blue.2"} />
      }
    />
  );
};

export default HeaderSearch;
