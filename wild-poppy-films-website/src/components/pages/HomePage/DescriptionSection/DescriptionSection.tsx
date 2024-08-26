import React from "react";
import * as Styled from "./DescriptionSection.styled";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useInView } from "react-intersection-observer";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";
import { useRouter } from "next/navigation";

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

    const router = useRouter();

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const handleNavigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <React.Fragment>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="red" />
            <Styled.Container ref={ref}>
                <ScrollIntoViewAnimationWrapper
                    $inView={inView}
                    $axis={"Y"}
                    $direction={1}
                    $animationDelay={0}
                >
                    <Styled.DescriptionContainer>
                        <Styled.Description>{description}</Styled.Description>
                        <Styled.DescriptionGreen>{descriptionGreen}</Styled.DescriptionGreen>
                    </Styled.DescriptionContainer>
                </ScrollIntoViewAnimationWrapper>
                <ScrollIntoViewAnimationWrapper
                    $inView={inView}
                    $axis={"Y"}
                    $direction={1}
                    $animationDelay={delayPerItem}
                >
                    <Styled.CtaContainer>
                        <PrimaryButton
                            label="our team"
                            variant="green"
                            onClick={() => handleNavigateTo("/our-team")}
                        />
                    </Styled.CtaContainer>
                </ScrollIntoViewAnimationWrapper>
            </Styled.Container>
        </React.Fragment>
    );
}
