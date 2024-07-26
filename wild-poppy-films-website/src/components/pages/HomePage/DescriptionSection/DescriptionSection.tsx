import React from "react";
import * as Styled from "./DescriptionSection.styled";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";

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

    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="red" />
            <Styled.Container>
                <Styled.DescriptionContainer>
                    <Styled.Description>{description}</Styled.Description>
                    <Styled.DescriptionGreen>{descriptionGreen}</Styled.DescriptionGreen>
                </Styled.DescriptionContainer>
                <Styled.CtaContainer>
                    <PrimaryButton href="/our-team" variant="green">
                        our team
                    </PrimaryButton>
                </Styled.CtaContainer>
            </Styled.Container>
        </React.Fragment>
    );
}
