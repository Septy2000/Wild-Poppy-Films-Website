import React from "react";
import * as Styled from "./FilmContainerLarge.styled";
import { Film } from "@/_types/common";
import FilmsYoutubeCtaButton from "@/components/Buttons/FilmsYoutubeCtaButton/FilmsYoutubeCtaButton";
import FilmFlail from "@/components/pages/FilmsPage/FilmContainerLarge/FilmFlail/FilmFlail";
import CreditList from "@/components/CreditList/CreditList";

export default function FilmContainerLarge({ film }: { film: Film }) {
    const href = `/films/${film.slug}`;

    // FilmTitle is the link and stretches its hit area over the whole card - see
    // FilmContainerLarge.styled. The card itself stays a <div> because it may also
    // contain the YouTube link, and <a> cannot be nested inside <a>.
    const youtubeCta = film.youtube_link ? (
        <Styled.CtaWrapper>
            <FilmsYoutubeCtaButton link={film.youtube_link} />
        </Styled.CtaWrapper>
    ) : null;

    return (
        <React.Fragment>
            <Styled.MobileContainer>
                <FilmFlail filmStatus={film.status} />
                {/* Fixed 16rem (256px) in the mobile card */}
                <Styled.FilmImage
                    src={film.cover}
                    alt={`${film.title} poster`}
                    sizes="256px"
                    placeholder="blur"
                />
                <Styled.FilmInfoContainer>
                    <Styled.FilmTitleAndYearContainer>
                        <Styled.FilmTitle href={href}>{film.title}</Styled.FilmTitle>
                        <Styled.FilmYear>{film.release_year}</Styled.FilmYear>
                    </Styled.FilmTitleAndYearContainer>
                    {youtubeCta}
                    <Styled.FilmProductionContainer>
                        <CreditList
                            label="PROD. BY "
                            names={film.production.producer}
                            LabelText={Styled.DefaultText}
                            NameText={Styled.ProductionText}
                        />
                    </Styled.FilmProductionContainer>
                </Styled.FilmInfoContainer>
            </Styled.MobileContainer>

            <Styled.DesktopContainer>
                <FilmFlail filmStatus={film.status} />
                <Styled.FilmTitle href={href}>{film.title}</Styled.FilmTitle>
                {/* Fills the desktop card, which spans the page minus the 4rem gutters */}
                <Styled.FilmImage
                    src={film.cover}
                    alt=""
                    aria-hidden="true"
                    sizes="calc(100vw - 8rem)"
                    placeholder="blur"
                />
                <Styled.GlassOverFrameStyled />
                <Styled.BlockContainer>
                    <Styled.DefaultText>
                        {film.release_year} | {film.type} | {film.genre}{" "}
                    </Styled.DefaultText>
                </Styled.BlockContainer>
                <Styled.BlockContainer>
                    <Styled.FilmProductionContainer>
                        <CreditList
                            label="PROD. BY "
                            names={film.production.producer}
                            LabelText={Styled.DefaultText}
                            NameText={Styled.ProductionText}
                        />
                    </Styled.FilmProductionContainer>
                    <Styled.FilmProductionContainer>
                        <CreditList
                            label="WRITTEN BY "
                            names={film.production.writer}
                            LabelText={Styled.DefaultText}
                            NameText={Styled.ProductionText}
                        />
                    </Styled.FilmProductionContainer>
                </Styled.BlockContainer>
                {youtubeCta}
            </Styled.DesktopContainer>
        </React.Fragment>
    );
}
