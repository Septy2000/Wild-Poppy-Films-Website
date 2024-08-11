"use client";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import React, { useState } from "react";
import * as Styled from "./OurTeamPage.styled";
import { teamMembers } from "@/data";
import MemberContainer from "@/components/pages/OurTeamPage/MemberContainer/MemberContainer";

export default function OurTeamPage() {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | undefined>(undefined);

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
        </Styled.Container>
    );
}
