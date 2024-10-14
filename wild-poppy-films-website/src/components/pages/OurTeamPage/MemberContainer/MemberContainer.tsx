import React, { useState, useEffect } from "react";
import * as Styled from "./MemberContainer.styled";
import { TeamMember } from "@/_types/common";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";

export default function MemberContainer({
    member,
    index,
    expandedMemberIndex,
    setExpandedMemberIndex,
}: {
    member: TeamMember;
    index: number;
    expandedMemberIndex: number | undefined;
    setExpandedMemberIndex: (index: number | undefined) => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const rolesString = member.roles.join(" & ");

    useEffect(() => {
        if (expandedMemberIndex !== index) {
            setIsExpanded(false);
        }
    }, [expandedMemberIndex, index]);

    function handleExpandToggle() {
        if (isExpanded) {
            setIsExpanded(false);

            setExpandedMemberIndex(undefined);
        } else {
            setIsExpanded(true);

            setExpandedMemberIndex(index);
        }
    }

    return (
        <Styled.Container>
            <Styled.HeaderInfoContainer>
                <Styled.MemberInfoContainer>
                    <Styled.Name>{member.name}</Styled.Name>
                    <Styled.GreenText>{rolesString}</Styled.GreenText>
                    <Styled.GreenText>{member.location}</Styled.GreenText>
                </Styled.MemberInfoContainer>
                <Styled.SocialsContainer>
                    {member.socials.imdb && (
                        <ModalSocialButton
                            link={member.socials.imdb}
                            icon={<Styled.ImdbIconStyled />}
                        />
                    )}
                    {member.socials.instagram && (
                        <ModalSocialButton
                            link={member.socials.instagram}
                            icon={<Styled.InstagramIconStyled />}
                        />
                    )}
                </Styled.SocialsContainer>
            </Styled.HeaderInfoContainer>
            <Styled.ExpandedInfoContainer $isExpanded={isExpanded}>
                <Styled.DescriptionContainer>
                    <Styled.Text>{member.description}</Styled.Text>
                </Styled.DescriptionContainer>
                <Styled.CenteredContainer>
                    <Styled.ImageContainer>
                        <Styled.ImageStyled
                            src={member.icon.src}
                            alt={member.name}
                            width={300}
                            height={300}
                        />
                    </Styled.ImageContainer>
                </Styled.CenteredContainer>
            </Styled.ExpandedInfoContainer>
            <Styled.ExpandContainer onClick={handleExpandToggle}>
                <Styled.StyledDownwardIcon $isExpanded={isExpanded} />
            </Styled.ExpandContainer>
        </Styled.Container>
    );
}
