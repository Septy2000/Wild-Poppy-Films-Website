import React from "react";
import * as Styled from "./FilmContainerLarge.styled";
import { Film } from "@/_types/common";
import FilmsYoutubeCtaButton from "@/components/Buttons/FilmsYoutubeCtaButton/FilmsYoutubeCtaButton";
import FilmFlail from "@/components/pages/FilmsPage/FilmContainerLarge/FilmFlail/FilmFlail";
import { useRouter } from "next/navigation";

export default function FilmContainerLarge({ film }: { film: Film }) {
    const router = useRouter();

    function handleClick() {
        router.push(`/films/${film.slug}`);
    }

    return (
        <React.Fragment>
            <Styled.MobileContainer onClick={handleClick}>
                <FilmFlail filmStatus={film.status} />
                <Styled.FilmImage src={film.cover} alt="film-cover" />
                <Styled.FilmInfoContainer>
                    <Styled.FilmTitleAndYearContainer>
                        <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                        <Styled.FilmYear>{film.release_year}</Styled.FilmYear>
                    </Styled.FilmTitleAndYearContainer>
                    {film.youtube_link && <FilmsYoutubeCtaButton link={film.youtube_link} />}
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
                </Styled.FilmInfoContainer>
            </Styled.MobileContainer>

            <Styled.DesktopContainer onClick={handleClick}>
                <FilmFlail filmStatus={film.status} />
                <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                <Styled.FilmImage src={film.cover} alt="film-cover" />
                <Styled.GlassOverFrameStyled />
                <Styled.BlockContainer>
                    <Styled.DefaultText>
                        {film.release_year} | {film.type} | {film.genre}{" "}
                    </Styled.DefaultText>
                </Styled.BlockContainer>
                <Styled.BlockContainer>
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
                    <Styled.FilmProductionContainer>
                        <Styled.DefaultText>{"WRITTEN BY "}</Styled.DefaultText>
                        {film.production.writer &&
                            film.production.writer.map((writer, index) => (
                                <React.Fragment key={index}>
                                    <Styled.ProductionText>{writer}</Styled.ProductionText>
                                    {index < film.production.writer.length - 1 && (
                                        <Styled.DefaultText key={`and-${index}`}>
                                            {" & "}
                                        </Styled.DefaultText>
                                    )}
                                </React.Fragment>
                            ))}
                    </Styled.FilmProductionContainer>
                </Styled.BlockContainer>
                {film.youtube_link && <FilmsYoutubeCtaButton link={film.youtube_link} />}
            </Styled.DesktopContainer>
        </React.Fragment>
    );
}
