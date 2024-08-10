"use client";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import React, { useState } from "react";
import * as Styled from "./OurTeamPage.styled";

export default function OurTeamPage() {
    const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | undefined>(undefined);

    return (
        <Styled.Container>
            <TitleBuffer title="OUR TEAM" description="Bunch of really talented gardeners." />;
            <Styled.MembersContainer></Styled.MembersContainer>
        </Styled.Container>
    );
}
