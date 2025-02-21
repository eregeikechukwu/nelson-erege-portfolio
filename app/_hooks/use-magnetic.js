"use client";

import { useCallback, useState } from "react";

/** @param {import('react').MutableRefObject<HTMLButtonElement>} element */
export function useMagnetic(element) {
  const [position, setPosition] = useState({ xinit: 0, yinit: 0 });

  /** @type {import('react').PointerEventHandler<HTMLButtonElement>} */
  const handleMagneticMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const { width, height, left, top } =
        element.current.getBoundingClientRect();

      const xinit = (clientX - (left + width / 2)) * 0.35;
      const yinit = (clientY - (top + height / 2)) * 0.35;
      setPosition((prePosition) => ({ ...prePosition, xinit, yinit }));
    },
    [element],
  );

  const handleMagneticOut = useCallback(
    () => setPosition({ xinit: 0, yinit: 0 }),
    [],
  );

  return { position, handleMagneticMove, handleMagneticOut };
}
