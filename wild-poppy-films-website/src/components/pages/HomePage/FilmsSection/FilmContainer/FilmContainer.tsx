import React from "react";
import * as Styled from "./FilmContainer.styled";
import { Film } from "@/_types/common";

export default function FilmContainer({ film }: { film: Film }) {
    return (
        <Styled.Container>
            <Styled.FilmImagePlaceholder />
            <Styled.FilmInfoContainer>
                <Styled.FilmTitleAndYearContainer>
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                    <Styled.FilmYear>{film.year}</Styled.FilmYear>
                </Styled.FilmTitleAndYearContainer>
                <Styled.FilmInfoContainer>
                    <Styled.DefaultText>{film.genre}</Styled.DefaultText>
                    <Styled.DefaultText>{"PROD BY. "}</Styled.DefaultText>
                    {film.production.map((producer, id) => (
                        <Styled.ProductionText key={id}>{producer}</Styled.ProductionText>
                    ))}
                </Styled.FilmInfoContainer>
            </Styled.FilmInfoContainer>
        </Styled.Container>
    );
}
