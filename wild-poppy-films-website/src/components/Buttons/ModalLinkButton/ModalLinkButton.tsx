"use client";

import React from "react";
import * as Styled from "./ModalLinkButton.styled";
import { ModalLinkButtonProps } from "@/_types/components";

export default function ModalLinkButton({
    onClick = () => {},
    label,
    link,
    delay = 0,
}: ModalLinkButtonProps) {
    return (
        <Styled.Container
            href={link}
            $axis={"X"}
            $direction={-1}
            $delay={delay}
            onClick={() => {
                onClick();
            }}
        >
            <React.Fragment>
                <Styled.Label>{label}</Styled.Label>

                <Styled.RightFwdIconStyled />
            </React.Fragment>
        </Styled.Container>
    );
}
