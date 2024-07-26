"use client";
import React from "react";
import * as Styled from "./FilmContainer.styled";
import { Film } from "@/_types/common";
import { useRouter } from "next/navigation";

export default function FilmContainer({ film }: { film: Film }) {
    const router = useRouter();

    return (
        <Styled.Container onClick={() => router.push(`/films/${film.slug}`)}>
            <Styled.FilmImagePlaceholder />
            <Styled.FilmInfoContainer>
                <Styled.FilmTitleAndYearContainer>
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                    <Styled.FilmYear>{film.year}</Styled.FilmYear>
                </Styled.FilmTitleAndYearContainer>
                <Styled.FilmDescriptionContainer>
                    <Styled.DefaultText>{film.genre}</Styled.DefaultText>
                    <Styled.FilmProductionContainer>
                        <Styled.DefaultText>{"PROD. BY "}</Styled.DefaultText>
                        {film.production.map((producer, index) => (
                            <React.Fragment key={index}>
                                <Styled.ProductionText>{producer}</Styled.ProductionText>
                                {index < film.production.length - 1 && (
                                    <Styled.DefaultText key={`and-${index}`}>
                                        {" & "}
                                    </Styled.DefaultText>
                                )}
                            </React.Fragment>
                        ))}
                    </Styled.FilmProductionContainer>
                </Styled.FilmDescriptionContainer>
            </Styled.FilmInfoContainer>
            <Styled.BackArrowIconStyled />
        </Styled.Container>
    );
}
