import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from "@/layout";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nelson Erege",
  url: "https://nelson-erege-portfolio.vercel.app",
  jobTitle: "Front-end Engineer & Developer",
  image:
    "https://res.cloudinary.com/du0dbvljb/image/upload/v1741172473/Group_1_1_wgkhap.png",
  sameAs: [
    "https://www.linkedin.com/in/nelson-erege-1a0b4b1b9/",
    "https://github.com/nelson-erege",
  ],
};

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Home | Nelson Erege",
  description:
    "Building consistent and engaging digital experiences. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Content */}
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
    </>
  );
}
