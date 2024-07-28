import { AspectRatio, Box, Image } from "@chakra-ui/react";

interface Props {
  src: string;
}
export const Frame = ({ src }: Props) => {
  return (
    <AspectRatio
      minW="282px"
      maxW="282px"
      ratio={282 / 560}
      border="1px solid"
      borderColor="grayscale.400"
      borderRadius="md"
    >
      <Image src={src} alt="src" />
    </AspectRatio>
  );
};
