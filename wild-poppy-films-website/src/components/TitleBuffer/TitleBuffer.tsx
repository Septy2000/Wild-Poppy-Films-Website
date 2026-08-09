import * as Styled from "./TitleBuffer.styled";
import React from "react";

export default function TitleBuffer({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const numberOfItems = 5;

    // Two identical tracks scrolling side by side produce the seamless marquee.
    // Only the very first copy is the page's real <h1>; the other nine exist purely
    // to fill the strip, so they are hidden from screen readers.
    const track = (trackIndex: number) => (
        <Styled.ScrollContainer aria-hidden={trackIndex > 0 ? true : undefined}>
            {Array.from({ length: numberOfItems }).map((_, index) => {
                const isPageHeading = trackIndex === 0 && index === 0;

                return (
                    <Styled.Title
                        key={index}
                        as={isPageHeading ? "h1" : "span"}
                        aria-hidden={isPageHeading ? undefined : true}
                    >
                        {title}
                    </Styled.Title>
                );
            })}
        </Styled.ScrollContainer>
    );

    return (
        <Styled.Container>
            {track(0)}
            {track(1)}
            <Styled.Description>{description}</Styled.Description>
        </Styled.Container>
    );
}
