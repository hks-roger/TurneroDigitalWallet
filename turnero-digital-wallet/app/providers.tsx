"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { MetaMaskProvider } from "metamask-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <MetaMaskProvider>{children}</MetaMaskProvider>
    </ChakraProvider>
  );
}
