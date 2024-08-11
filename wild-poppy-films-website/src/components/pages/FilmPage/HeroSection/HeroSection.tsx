import * as Styled from "./HeroSection.styled";
import { Film } from "@/_types/common";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function HeroSection({ film }: { film: Film }) {
    const router = useRouter();

    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    function ProductionInfo() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }

    return (
        <Styled.Container ref={ref}>
            <Styled.DescriptionContainer>
                <Styled.DescriptionText $inView={inView} $animationDelay={delayPerItem}>
                    {film.description}
                </Styled.DescriptionText>
                {film.teaser_youtube_link && (
                    <Styled.AnimationWrapper $inView={inView} $animationDelay={2 * delayPerItem}>
                        <SecondaryButton
                            text="Watch Teaser on Youtube"
                            onClick={() => router.push(film.teaser_youtube_link ?? "/not-found")}
                        />
                    </Styled.AnimationWrapper>
                )}
            </Styled.DescriptionContainer>
            <Styled.ProductionContainer>
                <Styled.AnimationWrapper $inView={inView} $animationDelay={3 * delayPerItem}>
                    <ProductionInfo />
                </Styled.AnimationWrapper>
            </Styled.ProductionContainer>
        </Styled.Container>
    );
}
