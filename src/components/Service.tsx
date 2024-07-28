import { Card, HStack, Image, VStack, Flex, Tooltip } from "@chakra-ui/react";
import { Frame } from "./Frame";
import { Typo } from "./common/texts/Typo";
import Link from "next/link";

interface Props {
  logo: string;
  thumbnail: string;
  name: string;
  description?: string;
}

export const Service = ({ logo, thumbnail, name, description }: Props) => {
  return (
    <Link href={`/${name}`}>
      <Card
        backgroundColor="transparent"
        border="none"
        boxShadow="none"
        minW="282px"
        maxW="282px"
        cursor="pointer"
      >
        <HStack spacing={16} marginBottom={"16px"}>
          <Flex
            backgroundColor="white"
            boxSize={"64px"}
            border="2px solid"
            borderColor="grayscale.400"
            justifyContent="center"
            align="center"
            borderRadius="square"
            flexShrink={0}
          >
            <Image src={logo} alt={`${name} logo image`} objectFit="cover" />
          </Flex>

          <VStack spacing={2} alignItems="start" width="full" flexShrink={2}>
            <Tooltip
              label={name}
              aria-label="tooltip"
              maxW="full"
              placement="auto"
              openDelay={200}
            >
              <Typo as="h4" variants="xl" noOfLines={1} maxW="202px">
                {name}
              </Typo>
            </Tooltip>

            {description && (
              <Tooltip
                label={description}
                aria-label="tooltip"
                maxW="full"
                placement="auto"
                openDelay={200}
              >
                <Typo
                  as="span"
                  variant="sm"
                  noOfLines={2}
                  maxW="202px"
                  color="grayscale.200"
                >
                  {description}
                </Typo>
              </Tooltip>
            )}
          </VStack>
        </HStack>
        <Frame src={thumbnail} />
      </Card>
    </Link>
  );
};
