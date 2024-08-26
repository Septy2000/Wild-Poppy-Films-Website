"use client";

import React from "react";
import * as Styled from "./ModalLinkButton.styled";
import { ButtonProps } from "@/_types/components";

export default function ModalLinkButton({ label, onClick }: ButtonProps) {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.RightFwdIconStyled />
        </Styled.Container>
    );
}
