import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import type { PropsWithChildren } from "react";
import theme from "@/lib/theme";

export const ChakraUIProver = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
