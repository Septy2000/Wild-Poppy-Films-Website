import type { Metadata } from "next";
import OurTeamPage from "@/components/pages/OurTeamPage/OurTeamPage";

const description =
    "Meet the producers, directors and writers behind Wild Poppy Films, working out of London, Amsterdam and New York.";

export const metadata: Metadata = {
    title: "Our Team",
    description,
    alternates: { canonical: "/our-team" },
    openGraph: { title: "Our Team | Wild Poppy Films", description, url: "/our-team" },
};

export default function OurTeam() {
    return <OurTeamPage />;
}
