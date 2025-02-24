"use client";

import { useEffect, useState } from "react";

export const useHashPath = function () {
  const [hashPath, setHashPath] = useState(false);

  useEffect(() => {
    window.location.hash ? setHashPath(true) : setHashPath(false);
  }, []);
  console.log(hashPath);

  return hashPath;
};
