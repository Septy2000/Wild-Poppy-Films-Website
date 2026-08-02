"use client";

import React from "react";
import * as Styled from "./ModalLinkButton.styled";

export default function ModalLinkButton({
    label,
    href,
    onClick,
}: {
    label: string;
    href: string;
    /** Optional side effect on activation, e.g. closing the nav modal. */
    onClick?: () => void;
}) {
    return (
        <Styled.Container href={href} onClick={onClick}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.RightFwdIconStyled />
        </Styled.Container>
    );
}
