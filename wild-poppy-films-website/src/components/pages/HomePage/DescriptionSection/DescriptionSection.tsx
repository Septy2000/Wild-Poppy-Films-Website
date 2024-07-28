import React from "react";
import * as Styled from "./DescriptionSection.styled";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useInView } from "react-intersection-observer";

export default function DescriptionSection() {
    const scrollBannerDisplayTextList: string[] = ["growing everywhere", "in a poppyseed..."];

    const description: string = `
        ...we are a young, female led, 
        independent production company dedicated to 
        supporting emerging storytellers to 
        develop conversation-sparking-question-raising 
    `;

    const descriptionGreen: string = `
        films. 
    `;

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="red" />
            <Styled.Container ref={ref}>
                <Styled.DescriptionContainer $inView={inView} $axis={"Y"} $direction={1}>
                    <Styled.Description>{description}</Styled.Description>
                    <Styled.DescriptionGreen>{descriptionGreen}</Styled.DescriptionGreen>
                </Styled.DescriptionContainer>
                <Styled.CtaContainer>
                    <PrimaryButton
                        href="/our-team"
                        variant="green"
                        animated
                        axis="Y"
                        direction={1}
                        delay={delayPerItem}
                        inView={inView}
                    >
                        our team
                    </PrimaryButton>
                </Styled.CtaContainer>
            </Styled.Container>
        </React.Fragment>
    );
}
