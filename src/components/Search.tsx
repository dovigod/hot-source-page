import { Box, Input } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Box px="px" py="px">
      <Input
        width="full"
        height="60px"
        borderRadius="full"
        px="84px"
        placeholder="검색어를 입력해주세요"
        backgroundColor="grayscale.400"
        focusBorderColor="grayscale.200"
        size="md"
      />
    </Box>
  );
};
