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

    return (
        <Styled.Container>
            <Styled.ScrollContainer>
                {Array.from({ length: numberOfItems }).map((_, index) => (
                    <Styled.Title key={index}>{title}</Styled.Title>
                ))}
            </Styled.ScrollContainer>
            <Styled.ScrollContainer>
                {Array.from({ length: numberOfItems }).map((_, index) => (
                    <Styled.Title key={index}>{title}</Styled.Title>
                ))}
            </Styled.ScrollContainer>

            <Styled.Description>{description}</Styled.Description>
        </Styled.Container>
    );
}
