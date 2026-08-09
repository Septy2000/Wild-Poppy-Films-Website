"use client";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import React, { useState } from "react";
import * as Styled from "./OurTeamPage.styled";
import { teamMembers } from "@/data";
import MemberContainer from "@/components/pages/OurTeamPage/MemberContainer/MemberContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function OurTeamPage() {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | undefined>(undefined);

    const delayPerItem = 0.1;

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
                        key={member.id}
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
                        href="/contact-us"
                        variant={"red"}
                    />
                </ScrollIntoViewAnimationWrapper>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}
