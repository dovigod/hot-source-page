import { HStack, Flex, VStack, Spacer, Image } from "@chakra-ui/react";
import { Typo } from "../common/texts/Typo";

export const Header = () => {
  const name = "Sample Service";
  const description = "hello world ";
  const date = "2012-02-12";

  return (
    <HStack as="header" spacing={"24px"}>
      <Flex
        backgroundColor="white"
        border="2px solid"
        borderColor="grayscale.400"
        justifyContent="center"
        align="center"
        flexShrink={0}
        boxSize="120px"
        borderRadius="md"
      >
        <Image src="/sample-service-logo.png" alt="sample logo" />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="start"
        justifyContent="space-between"
        width="full"
        flexShrink={2}
        maxH="120px"
        height="full"
      >
        <VStack spacing={2} alignItems="start">
          <Typo as="h4" variants="xl" fontSize="32px">
            {name}
          </Typo>

          {description && (
            <Typo as="span" variant="sm" color="grayscale.200" fontSize="16px">
              {description}
            </Typo>
          )}
        </VStack>
        <Spacer />
        <Typo
          as="span"
          variant="sm"
          noOfLines={2}
          color="grayscale.200"
          fontSize="rg"
        >
          {date}
        </Typo>
      </Flex>
    </HStack>
  );
};
