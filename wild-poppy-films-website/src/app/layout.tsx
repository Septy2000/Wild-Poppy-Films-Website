import type { Metadata, Viewport } from "next";
import ThemeClient from "@/styles/theme/ThemeClient";
import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { SkipLink } from "@/components/SkipLink/SkipLink.styled";
import { organizationSchema } from "@/utils/structuredData";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    alternates: {
        canonical: "/",
    },
    icons: {
        // Google's favicon crawler wants a square that is a multiple of 48px, so
        // the .ico carries a 48x48 alongside the sizes browsers use.
        icon: [
            { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
            { url: "/icon.png", type: "image/png", sizes: "512x512" },
        ],
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        type: "website",
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        locale: siteConfig.locale,
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - independent film production`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: ["/opengraph-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        // Without these Google caps the search result to a small thumbnail and a
        // short snippet. Films are a visual product, so opt into the large preview.
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <ThemeClient>
                        <GlobalStyles />
                        <JsonLd schema={organizationSchema()} />
                        <SkipLink href="#main-content">Skip to content</SkipLink>
                        <NavBar />
                        {/* The site had no <main> landmark, so screen reader users had no
                            way to jump past the navigation on every page. */}
                        <main id="main-content">{children}</main>
                        <Footer />
                    </ThemeClient>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
