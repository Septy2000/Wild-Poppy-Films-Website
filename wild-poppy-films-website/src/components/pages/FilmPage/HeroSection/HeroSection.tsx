import * as Styled from "./HeroSection.styled";
import { Film } from "@/_types/common";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import React from "react";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

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
                <ScrollIntoViewAnimationWrapper
                    $inView={inView}
                    $animationDelay={0}
                    $axis="Y"
                    $direction={1}
                >
                    <Styled.DescriptionText>{film.description}</Styled.DescriptionText>
                </ScrollIntoViewAnimationWrapper>

                {film.teaser_youtube_link && (
                    <ScrollIntoViewAnimationWrapper
                        $inView={inView}
                        $animationDelay={delayPerItem}
                        $axis="Y"
                        $direction={1}
                    >
                        <SecondaryButton
                            label="Watch Teaser on Youtube"
                            onClick={() => router.push(film.teaser_youtube_link ?? "/not-found")}
                        />
                    </ScrollIntoViewAnimationWrapper>
                )}
            </Styled.DescriptionContainer>
            <Styled.ProductionContainer>
                <ScrollIntoViewAnimationWrapper
                    $inView={inView}
                    $animationDelay={2 * delayPerItem}
                    $axis="Y"
                    $direction={1}
                >
                    <ProductionInfo />
                </ScrollIntoViewAnimationWrapper>
            </Styled.ProductionContainer>
        </Styled.Container>
    );
}
