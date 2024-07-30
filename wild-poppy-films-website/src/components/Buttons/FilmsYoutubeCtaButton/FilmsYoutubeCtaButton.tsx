"use client";
import * as Styled from "./FilmsYoutubeCtaButton.styled";
import useIsMobile from "@/hooks/useIsMobile";

export default function FilmsYoutubeCtaButton({ link }: { link: string }) {
    const cta = useIsMobile() ? "WATCH NOW ON YOUTUBE" : "WATCH NOW";

    return (
        <Styled.Container href={link}>
            <Styled.Label>{cta}</Styled.Label>
            <Styled.RightFwdIconStyled />
            <Styled.YoutubeIconStyled />
        </Styled.Container>
    );
}
