import Link from "next/link";

import { Center, MagneticButton } from "@/components";

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center className="relative z-10 bg-white max-md:mb-4">
      <Link href="https://github.com/eregeikechukwu" passHref>
        <MagneticButton
          variant="outline"
          className="px-10 py-8 text-base before:-top-1/2 hover:text-background"
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}
