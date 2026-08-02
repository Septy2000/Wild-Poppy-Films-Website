import type { Metadata } from "next";
import TermsAndConditionsPage from "@/components/pages/TermsAndConditionsPage/TermsAndConditionsPage";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "The terms and conditions governing use of the Wild Poppy Films website.",
    alternates: { canonical: "/terms-and-conditions" },
    robots: { index: false, follow: true },
};

export default function TermsAndConditions() {
    return <TermsAndConditionsPage />;
}
