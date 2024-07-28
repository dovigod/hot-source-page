import { Image } from "@chakra-ui/react";

interface Props {
  size?: "lg" | "md" | "sm";
}
export const Logo = ({ size = "lg" }: Props) => {
  const sizeClass = size === "lg" ? "w-96" : "w-12";
  return (
    <Image
      src="/logo.png"
      sizes="100px"
      alt="Hot source Logo"
      objectFit="cover"
      className={sizeClass}
      // fallbackSrc="https://via.placeholder.com/150"
    />
  );
};
