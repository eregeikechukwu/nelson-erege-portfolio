"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function RouteHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // const hiddenLink = document.createElement("a");
        // const worklink = document.getElementById("worklink");
        // worklink.click();

        // hiddenLink.href = `#${id}`;
        // document.body.appendChild(hiddenLink);
        // // hiddenLink.click();
        // document.body.removeChild(hiddenLink);

        // console.log(worklink + "       ", id);

        setTimeout(() => {
          window.history.pushState(null, "", `#${id}`);
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }, 2000);

        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          console.log("I was clicked");
        }, 500);

        // element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname]);

  return null;
}
