import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  src: string;
  size?: "md" | "sm";
}
export const Frame = ({ src, size = "md", ...props }: Props) => {
  const s = size === "md" ? "282px" : "220px";
  return (
    <AspectRatio
      minW={s}
      maxW={s}
      ratio={282 / 560}
      border="1px solid"
      borderColor="grayscale.400"
      borderRadius="md"
      {...props}
    >
      <Image src={src} alt="src" />
    </AspectRatio>
  );
};
