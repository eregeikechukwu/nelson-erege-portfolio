export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/_next"],
    },
    sitemap: "https://nelson-erege-portfolio.vercel.app/sitemap.xml",
  };
}
