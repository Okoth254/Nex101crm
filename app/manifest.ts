import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.NEXT_PUBLIC_APP_NAME || "NEX101 Hub",
    short_name: "NEX101",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#CE0054",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
