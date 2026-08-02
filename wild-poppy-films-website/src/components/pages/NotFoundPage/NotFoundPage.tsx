"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import * as Styled from "./NotFoundPage.styled";

export default function NotFoundPage() {
    const pageContent = {
        title: "— Ups! We've hit a bump in the poppy field!",
        text: "Our system could not find the page you were looking for - it's on us, don't worry!",
    };

    return (
        <Styled.PageWrapper>
            <Styled.BannerWrapper>
                <Styled.Banner>
                    <Styled.Title>{pageContent.title}</Styled.Title>
                </Styled.Banner>
            </Styled.BannerWrapper>

            <Styled.Container>
                <Styled.ContentWrapper>
                    <Styled.Text>{pageContent.text}</Styled.Text>
                    {/* A link, not router.back(): going back returns the visitor to the
                        broken URL, and does nothing when they arrived here directly. */}
                    <PrimaryButton label="return home" href="/" />
                </Styled.ContentWrapper>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
