import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center" ml="auto">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Luiz</Text>
          <Text color="gray.300" fontSize="small">
            pe_lfsilva@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Luiz"
        src="https://github.com/PedroLuizComZ.png"
      />
    </Flex>
  );
}
