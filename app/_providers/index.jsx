"use client";

import { useEffect } from "react";

import { BalancerProvider } from "./balancer";
import { StyledComponentsRegistry } from "./styled-components";
// import { useCanvas } from "../contexts";

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <BalancerProvider>{children}</BalancerProvider>
    </StyledComponentsRegistry>
  );
}
