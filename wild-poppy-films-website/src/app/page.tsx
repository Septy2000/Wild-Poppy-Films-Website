import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage/HomePage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    // Absolute so the home page reads "Wild Poppy Films - Independent Film
    // Production" rather than picking up the "%s | Wild Poppy Films" template.
    title: { absolute: `${siteConfig.name} - Independent Film Production` },
    description: siteConfig.description,
    alternates: { canonical: "/" },
};

export default function Home() {
    return <HomePage />;
}
