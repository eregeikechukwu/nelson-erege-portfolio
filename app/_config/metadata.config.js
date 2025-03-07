/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL("https://dennis-snellenberg-portfolio.vercel.app/"),
  title: {
    template: "%s | Nelson Erege",
    default: "Nelson Erege • Front-end Engineer & Developer",
  },
  description:
    "Building consistent and engaging digital experiences. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
  generator: "Nelson Erege",
  applicationName: "Nelson Erege",
  referrer: "origin-when-cross-origin",
  keywords: ["Design", "Engineer", "Front-end", "Developer"],
  authors: [
    { name: "Nelson Erege", url: "https://www.github.com/eregeikechukwu" },
  ],
  creator: "Nelson Erege",
  publisher: " Nelson Erege",
  twitter: {
    card: "summary_large_image",
    title: "Nelson Erege | Front-end Engineer & Developer",
    description:
      "Building consistent and engaging digital experiences. Located in Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
    siteId: "1467726470533754880",
    creator: "@EregeNelso40316",
    creatorId: "1467726470533754880",
    images: {
      url: "https://res.cloudinary.com/du0dbvljb/image/upload/v1741172473/Group_1_1_wgkhap.png",
      alt: "Portfolio Screenshot",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
