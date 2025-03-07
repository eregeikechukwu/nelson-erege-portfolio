import { InProgress } from "@/components";
import { Transition } from "@/layout";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "About",
  description:
    "Building consistent and engaging digital experiences. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}
