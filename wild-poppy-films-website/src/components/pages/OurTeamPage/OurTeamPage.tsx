"use client";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import React, { useState } from "react";
import * as Styled from "./OurTeamPage.styled";
import { teamMembers } from "@/data";
import MemberContainer from "@/components/pages/OurTeamPage/MemberContainer/MemberContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useRouter } from "next/navigation";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function OurTeamPage() {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | undefined>(undefined);

    const router = useRouter();
    const delayPerItem = 0.1;

    function handleNavigateTo(path: string) {
        router.push(path);
    }

    return (
        <Styled.Container>
            <TitleBuffer title="OUR TEAM" description="Bunch of really talented gardeners." />
            <Styled.MembersContainer>
                {teamMembers.map((member, index) => (
                    <ScrollIntoViewAnimationWrapper
                        $inView={true}
                        $animationDelay={(index + 1) * delayPerItem}
                        $axis="Y"
                        $direction={1}
                        key={index}
                    >
                        <MemberContainer
                            member={member}
                            index={index}
                            expandedMemberIndex={expandedMemberIndex}
                            setExpandedMemberIndex={setExpandedMemberIndex}
                        />
                    </ScrollIntoViewAnimationWrapper>
                ))}
            </Styled.MembersContainer>
            <Styled.ButtonContainer>
                <ScrollIntoViewAnimationWrapper
                    $inView={true}
                    $animationDelay={(teamMembers.length + 1) * delayPerItem}
                    $axis="Y"
                    $direction={1}
                >
                    <PrimaryButton
                        label="contact us"
                        onClick={() => handleNavigateTo("/contact-us")}
                        variant={"red"}
                    />
                </ScrollIntoViewAnimationWrapper>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}
