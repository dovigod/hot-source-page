"use client";
import { ChakraUIProver } from "@/configs/ChakraUIProvider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ChakraUIProver>{children}</ChakraUIProver>;
};
