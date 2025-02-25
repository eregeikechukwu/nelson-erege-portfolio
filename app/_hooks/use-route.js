"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function RouteHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const isHash = window.location.hash;

    const timeout = function (callback, duration) {
      setTimeout(callback, duration);
    };

    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        //OCHESTRATING PATH SCROLL SEQUENCE.
        setTimeout(
          () => {
            window.history.pushState(null, "", `/`);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          },
          isHash ? 200 : 2000,
        );
        setTimeout(
          () => {
            window.history.pushState(null, "", `#${id}`);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          },
          isHash ? 210 : 2010,
        );
        setTimeout(
          () => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          },
          isHash ? 220 : 2020,
        );
      }
    }
  }, [pathname]);

  return null;
}
