export default function sitemap() {
  const base = "https://nelson-erege-portfolio.vercel.app";
  return [
    {
      url: base,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
