"use client";

import { useEffect, useState } from "react";

export const useHashPath = function () {
  const [hashPath, setHashPath] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    window.location.hash ? setHashPath(true) : setHashPath(false);
    setHasLoaded(true);
  }, []);

  return { hashPath, hasLoaded, hash };
};
