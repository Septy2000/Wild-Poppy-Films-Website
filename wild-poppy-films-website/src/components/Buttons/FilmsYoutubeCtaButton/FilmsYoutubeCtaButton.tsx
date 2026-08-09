"use client";
import * as Styled from "./FilmsYoutubeCtaButton.styled";

export default function FilmsYoutubeCtaButton({ link }: { link: string }) {
    return (
        <Styled.Container href={link}>
            {/* Mobile reads "WATCH NOW ON YOUTUBE"; on desktop the suffix is hidden by media
                query and the YouTube icon carries that meaning instead. Doing this in CSS
                rather than a JS width check stops the label changing after hydration. */}
            <Styled.Label>
                WATCH NOW<Styled.MobileLabelSuffix> ON YOUTUBE</Styled.MobileLabelSuffix>
            </Styled.Label>
            <Styled.RightFwdIconStyled />
            <Styled.YoutubeIconStyled />
        </Styled.Container>
    );
}
