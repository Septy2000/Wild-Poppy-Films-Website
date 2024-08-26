"use client";
import React from "react";
import * as Styled from "./FilmContainer.styled";
import { useRouter } from "next/navigation";
import { FilmComponentProps } from "@/_types/components";
import { Film } from "@/_types/common";

export default function FilmContainer({ film }: { film: Film }) {
    const router = useRouter();

    function handleNavigateTo(path: string) {
        router.push(path);
    }

    return (
        <Styled.Container onClick={() => handleNavigateTo(`/films/${film.slug}`)}>
            <Styled.FilmImagePlaceholder />
            <Styled.FilmInfoContainer>
                <Styled.FilmTitleAndYearContainer>
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                    <Styled.FilmYear>{film.release_year}</Styled.FilmYear>
                </Styled.FilmTitleAndYearContainer>
                <Styled.FilmDescriptionContainer>
                    <Styled.DefaultText>{film.genre}</Styled.DefaultText>
                    <Styled.FilmProductionContainer>
                        <Styled.DefaultText>{"PROD. BY "}</Styled.DefaultText>
                        {film.production.producer.map((producer, index) => (
                            <React.Fragment key={index}>
                                <Styled.ProductionText>{producer}</Styled.ProductionText>
                                {index < film.production.producer.length - 1 && (
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
