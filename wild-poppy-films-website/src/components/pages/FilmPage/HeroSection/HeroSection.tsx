import * as Styled from "./HeroSection.styled";
import { Film } from "@/_types/common";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import { useInView } from "react-intersection-observer";
import React from "react";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";
import { formatCredits } from "@/utils/formatters";

export default function HeroSection({ film }: { film: Film }) {
    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const credits: { label: string; value: string }[] = [
        { label: "CREATED / WRITTEN BY", value: formatCredits(film.production.writer) },
        { label: "PRODUCED BY", value: formatCredits(film.production.producer) },
        { label: "DIRECTED BY", value: formatCredits(film.production.director) },
        { label: "STARRING", value: formatCredits(film.production.starring) },
    ];

    const releaseDetails: { label: string; value: string }[] = [
        { label: "RELEASE DATE", value: film.release_year },
        { label: "RUN TIME", value: film.runtime ?? "" },
    ];

    function ProductionPair({ label, value }: { label: string; value: string }) {
        // Several films have no runtime yet - skip the row rather than render a dangling label
        if (!value) return null;

        return (
            <Styled.ProductionPairContainer>
                <Styled.PlainText>{label}</Styled.PlainText>
                <Styled.PlainTextGreen>{value}</Styled.PlainTextGreen>
            </Styled.ProductionPairContainer>
        );
    }

    function ProductionInfo() {
        return (
            <React.Fragment>
                {credits.map(({ label, value }) => (
                    <ProductionPair key={label} label={label} value={value} />
                ))}
                <Styled.Spacer />
                {releaseDetails.map(({ label, value }) => (
                    <ProductionPair key={label} label={label} value={value} />
                ))}
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
                            href={film.teaser_youtube_link}
                            external
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
