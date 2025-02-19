import { useState } from "react";

export function useIfEmpty(e) {
  const [isEmpty, setIsEmpty] = useState(false);

  const regex = /^[\s]*$/;
  const boolean = regex.test(e.target.value);
  setIsEmpty(!boolean);

  return { isEmpty, setIsEmpty };
}
