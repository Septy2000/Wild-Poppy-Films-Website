"use client";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import React, { useState } from "react";
import * as Styled from "./OurTeamPage.styled";
import { teamMembers } from "@/data";
import MemberContainer from "@/components/pages/OurTeamPage/MemberContainer/MemberContainer";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { useRouter } from "next/navigation";

export default function OurTeamPage() {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | undefined>(undefined);

    const router = useRouter();

    function handleNavigateTo(path: string) {
        router.push(path);
    }

    return (
        <Styled.Container>
            <TitleBuffer title="OUR TEAM" description="Bunch of really talented gardeners." />
            <Styled.MembersContainer>
                {teamMembers.map((member, index) => (
                    <MemberContainer
                        key={member.name}
                        member={member}
                        index={index}
                        expandedMemberIndex={expandedMemberIndex}
                        setExpandedMemberIndex={setExpandedMemberIndex}
                    />
                ))}
            </Styled.MembersContainer>
            <Styled.ButtonContainer>
                <PrimaryButton
                    label="contact us"
                    onClick={() => handleNavigateTo("/contact-us")}
                    variant={"red"}
                />
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}
