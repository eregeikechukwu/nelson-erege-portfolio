import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from "@/layout";

import { CanvasProvider } from "./contexts/offCanvasContext";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Home | Nelson Erege",
  description:
    "Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
};

export default function Home() {
  return (
    <CanvasProvider>
      <Transition>
        <Navbar />
        <Header />
        <main>
          <Description />
          <Thumbnail />
          <Project />
        </main>
        <Contact />
      </Transition>
    </CanvasProvider>
  );
}
