import React from "react";
import * as Styled from "./FilmContainerLarge.styled";
import { Film } from "@/_types/common";
import FilmsYoutubeCtaButton from "@/components/Buttons/FilmsYoutubeCtaButton/FilmsYoutubeCtaButton";

export default function FilmContainerLarge({ film }: { film: Film }) {
    return (
        <Styled.Container>
            <Styled.FilmImagePlaceholder />
            <Styled.FilmInfoContainer>
                <Styled.FilmTitleAndYearContainer>
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                    <Styled.FilmYear>{film.year}</Styled.FilmYear>
                </Styled.FilmTitleAndYearContainer>
                {film.link && <FilmsYoutubeCtaButton link={film.link} />}
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
            </Styled.FilmInfoContainer>
        </Styled.Container>
    );
}
