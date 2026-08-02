import type { Metadata } from "next";
import ContactUsPage from "@/components/pages/ContactUsPage/ContactUsPage";

const description =
    "Get in touch with Wild Poppy Films about collaborations, festivals and distribution.";

export const metadata: Metadata = {
    title: "Contact",
    description,
    alternates: { canonical: "/contact-us" },
    openGraph: { title: "Contact | Wild Poppy Films", description, url: "/contact-us" },
};

export default function ContactUs() {
    return <ContactUsPage />;
}
