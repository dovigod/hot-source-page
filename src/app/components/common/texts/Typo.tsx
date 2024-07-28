/* eslint-disable react/display-name */
import { Text, TextProps } from "@chakra-ui/react";
import { PropsWithChildren, forwardRef } from "react";

interface Props extends TextProps, PropsWithChildren {
  variants?: "xl" | "md" | "rg";
}
export const Typo = forwardRef(
  ({ children, variants, ...props }: Props, ref) => {
    const family = "default";
    const size = variants;
    const weight =
      variants === "xl"
        ? "bold"
        : variants === "md"
        ? "medium"
        : variants === "rg"
        ? "regular"
        : "";
    const lineHeight = "fit";
    const letterspacing = "normal";
    const as = "span";

    return (
      <Text
        ref={ref}
        fontFamily={family}
        fontSize={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        letterSpacing={letterspacing}
        as={as}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
