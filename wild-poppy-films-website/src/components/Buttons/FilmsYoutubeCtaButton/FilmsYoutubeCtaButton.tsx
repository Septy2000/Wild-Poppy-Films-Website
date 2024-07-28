"use client";

import * as Styled from "./FilmsYoutubeCtaButton.styled";

export default function FilmsYoutubeCtaButton({ link }: { link: string }) {
    const cta = "WATCH NOW ON YOUTUBE";

    return (
        <Styled.Container href={link}>
            <Styled.Label>{cta}</Styled.Label>
            <Styled.RightFwdIconStyled />
        </Styled.Container>
    );
}
