"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import * as Styled from "./NotFoundPage.styled";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const pageContent = {
        title: "— Ups! We've hit a bump in the poppy field!",
        text: "Our system could not find the page you were looking for - it's on us, don't worry!",
    };

    const router = useRouter();

    const handleReturnButton = () => {
        router.back();
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
                    <PrimaryButton label="return home" onClick={handleReturnButton} />
                </Styled.ContentWrapper>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
