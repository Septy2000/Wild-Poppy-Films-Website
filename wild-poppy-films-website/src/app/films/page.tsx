import type { Metadata } from "next";
import { Suspense } from "react";
import { FilmsPage } from "@/components/pages/FilmsPage/FilmsPage";
import * as Styled from "@/components/pages/FilmsPage/FilmsPage.styled";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import PageLoading from "@/components/PageLoading/PageLoading";

const description =
    "Browse the Wild Poppy Films directory - short films and documentaries, released and in production.";

export const metadata: Metadata = {
    title: "Films",
    description,
    alternates: { canonical: "/films" },
    openGraph: { title: "Films | Wild Poppy Films", description, url: "/films" },
};

export default function Films() {
    // FilmsPage reads ?page= and ?filter=, so it can only render on the client and
    // has to sit behind Suspense. The shell and heading stay out here so they are
    // present in the static HTML rather than appearing only after hydration.
    return (
        <Styled.PageWrapper>
            <TitleBuffer title="FILMS" description="Our blooming film directory." />
            <Suspense fallback={<PageLoading />}>
                <FilmsPage />
            </Suspense>
        </Styled.PageWrapper>
    );
}
