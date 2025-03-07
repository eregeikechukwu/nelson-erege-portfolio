import { InProgress } from "@/components";
import { Transition } from "@/layout";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Work",
  description:
    "Building consistent and engaging digital experiences. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
};

export default function Work() {
  return (
    <Transition>
      <InProgress>Work Page</InProgress>
    </Transition>
  );
}
