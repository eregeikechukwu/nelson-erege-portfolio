import { rootMetadata } from "@/config";
import { neue_montreal } from "@/fonts";
import { Offcanvas } from "@/layout";
import { Providers } from "@/providers";

import "./globals.css";
import { RouteHandler } from "./_hooks";
import { CanvasProvider } from "./contexts/offCanvasContext";

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <RouteHandler />
        <CanvasProvider>
          <Providers>
            <Offcanvas />
            {children}
          </Providers>
        </CanvasProvider>
      </body>
    </html>
  );
}
