"use client";

import { useEffect } from "react";

import { BalancerProvider } from "./balancer";
import { StyledComponentsRegistry } from "./styled-components";
import { useCanvas } from "../contexts";

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  const { setNavOpen } = useCanvas();

  useEffect(() => {
    setNavOpen(false);
  }, []);

  return (
    <StyledComponentsRegistry>
      <BalancerProvider>{children}</BalancerProvider>
    </StyledComponentsRegistry>
  );
}
