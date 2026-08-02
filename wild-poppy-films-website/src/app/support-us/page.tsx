import type { Metadata } from "next";
import SupportUsPage from "@/components/pages/SupportUsPage/SupportUsPage";

const description =
    "Support Wild Poppy Films by bank transfer, or by redirecting 3.5% of your yearly Romanian income tax at no cost to you.";

export const metadata: Metadata = {
    title: "Support Us",
    description,
    alternates: { canonical: "/support-us" },
    openGraph: { title: "Support Us | Wild Poppy Films", description, url: "/support-us" },
};

export default function SupportUs() {
    return <SupportUsPage />;
}
