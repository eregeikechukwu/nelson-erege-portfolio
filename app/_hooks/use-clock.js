"use client";

import { useEffect, useRef, useState } from "react";

export function useTime() {
  const initTime = useRef();
  const [time, setTime] = useState("03:12 PM");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      // const delay = (60 - time.getSeconds()) * 1000;

      const hours =
        time.getHours() > 12
          ? `${time.getHours() - 12}`.padStart(2, 0)
          : `${time.getHours()}`.padStart(2, 0);
      const minutes = `${time.getMinutes()}`.padStart(2, 0);

      const timeSect = time.getHours() > 12 ? "PM" : "AM";

      setTime(`${hours}:${minutes} ${timeSect}`);
      initTime.current = `${hours}:${minutes} ${timeSect}`;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
