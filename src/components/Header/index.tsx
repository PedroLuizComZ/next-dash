import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";

import { Profile } from "../../components/Header/Profile";
import { NotificationNav } from "../../components/Header/NotificationNav";
import { SearchBox } from "../../components/Header/SearchBox";
import { Logo } from "../../components/Header/Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          mr="2"
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
