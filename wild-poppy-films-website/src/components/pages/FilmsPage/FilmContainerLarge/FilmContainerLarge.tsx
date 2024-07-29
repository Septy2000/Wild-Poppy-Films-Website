import React from "react";
import * as Styled from "./FilmContainerLarge.styled";
import { Film } from "@/_types/common";
import FilmsYoutubeCtaButton from "@/components/Buttons/FilmsYoutubeCtaButton/FilmsYoutubeCtaButton";
import FilmFlail from "@/components/pages/FilmsPage/FilmContainerLarge/FilmFlail/FilmFlail";

export default function FilmContainerLarge({
    film,
    delay,
    inView,
}: {
    film: Film;
    delay: number;
    inView: boolean;
}) {
    return (
        <React.Fragment>
            <Styled.MobileContainer $axis="Y" $direction={1} $delay={delay} $inView={inView}>
                <FilmFlail filmStatus={film.status} />
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
            </Styled.MobileContainer>

            <Styled.DesktopContainer $axis="Y" $direction={1} $delay={delay} $inView={inView}>
                <Styled.GlassOverFrameStyled />
                <FilmFlail filmStatus={film.status} />
                <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                <Styled.FilmImagePlaceholder />
                <Styled.BlockContainer>
                    <Styled.DefaultText>
                        {film.year} | {film.type} | {film.genre}{" "}
                    </Styled.DefaultText>
                </Styled.BlockContainer>
                <Styled.BlockContainer>
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
                    <Styled.FilmProductionContainer>
                        <Styled.DefaultText>{"WRITTEN BY "}</Styled.DefaultText>
                        {film.writer &&
                            film.writer.map((writer, index) => (
                                <React.Fragment key={index}>
                                    <Styled.ProductionText>{writer}</Styled.ProductionText>
                                    {film.writer && index < film.writer.length - 1 && (
                                        <Styled.DefaultText key={`and-${index}`}>
                                            {" & "}
                                        </Styled.DefaultText>
                                    )}
                                </React.Fragment>
                            ))}
                    </Styled.FilmProductionContainer>
                </Styled.BlockContainer>
                {film.link && <FilmsYoutubeCtaButton link={film.link} />}
            </Styled.DesktopContainer>
        </React.Fragment>
    );
}
