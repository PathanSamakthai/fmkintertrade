import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description:
      "Integrated agriculture, livestock, engineering, cold storage and cross-border trade solutions across Southeast Asia.",
    start_url: "/en",
    display: "standalone",
    background_color: "#F4F7F5",
    theme_color: "#0B2F22",
    icons: [
      // PLACEHOLDER — add real PWA icons (192px / 512px) to /public and list them here.
    ],
  };
}
