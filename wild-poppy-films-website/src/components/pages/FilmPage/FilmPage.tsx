"use client";
import { Film, News } from "@/_types/common";
import { useRouter } from "next/navigation";
import * as Styled from "./FilmPage.styled";
import React from "react";
import ReturnButton from "@/components/Buttons/ReturnButton/ReturnButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { filmsNews } from "@/data";

export default function FilmPage({ film }: { film: Film }) {
    const router = useRouter();
    const shownNews: News[] = filmsNews.slice(0, 3);

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.ImageStyled
                    width={300}
                    height={300}
                    priority
                    src={film.cover.src}
                    alt={`${film.title}-cover`}
                />
                <Styled.GlassOverFrameStyled />
                <Styled.ImageOverlay>
                    <ReturnButton text="FILMS" onClick={() => router.back()} />
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                </Styled.ImageOverlay>
            </Styled.ImageContainer>
            <Styled.DescriptionContainer>
                <Styled.DescriptionText>{film.description}</Styled.DescriptionText>
                {film.teaser_youtube_link && (
                    <SecondaryButton
                        text="Watch Teaser on Youtube"
                        onClick={() => router.push(film.teaser_youtube_link ?? "/not-found")}
                    />
                )}
            </Styled.DescriptionContainer>

            <Styled.SectionContainer>
                <Styled.ProductionContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>CREATED / WRITTEN BY</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.production.writer}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>EXECUTIVE PRODUCED BY</Styled.PlainText>
                        <Styled.PlainTextGreen>
                            {film.production.executive_producer}
                        </Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>PRODUCED BY</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.production.producer}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>DIRECTED BY</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.production.director}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>STARRING</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.production.starring}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.Spacer />
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>DISTRIBUTOR</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.production.distributor}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>RELEASE DATE</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.release_year}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                    <Styled.ProductionPairContainer>
                        <Styled.PlainText>RUN TIME</Styled.PlainText>
                        <Styled.PlainTextGreen>{film.runtime}</Styled.PlainTextGreen>
                    </Styled.ProductionPairContainer>
                </Styled.ProductionContainer>
                <Styled.CarouselSectionContainer>
                    <ImageCarousel images={film.gallery} />
                </Styled.CarouselSectionContainer>
            </Styled.SectionContainer>
            <Styled.NewsContainer>
                <Styled.NewsContainerTitle>POPPYING UP IN THE NEWS!</Styled.NewsContainerTitle>
                // add news containers;
            </Styled.NewsContainer>
        </Styled.Container>
    );
}
