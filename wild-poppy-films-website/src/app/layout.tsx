import type { Metadata, Viewport } from "next";
import ThemeClient from "@/styles/theme/ThemeClient";
import GlobalStyles from "@/styles/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Open_Sans } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Wild Poppy Films",
    description: "",
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
        <html lang="en" className={openSans.className}>
            <StyledComponentsRegistry>
                <ThemeClient>
                    <GlobalStyles />
                    <body>
                        <NavBar />
                        {children}
                        <Footer />
                    </body>
                </ThemeClient>
            </StyledComponentsRegistry>
        </html>
    );
}
