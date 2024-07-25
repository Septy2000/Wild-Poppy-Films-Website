"use client";

import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./ModalLinkButton.styled";
import { ModalLinkButtonProps } from "@/_types/components";

export default function ModalLinkButton({
    onClick = () => {},
    label,
    link,
    translateX = 0,
    isVisible = true,
    delay = 0,
}: ModalLinkButtonProps) {
    const [isModalDisplayed, setIsModalDisplayed] = useState(true);
    const buttonDisappearTimeout = useRef<NodeJS.Timeout | null>(null);

    // make the button disappear after the modal animation is finished
    // 500ms is the duration of the modal animation
    useEffect(() => {
        if (!isVisible) {
            buttonDisappearTimeout.current = setTimeout(() => {
                setIsModalDisplayed(false);
            }, 500);
        } else {
            if (buttonDisappearTimeout.current) {
                clearTimeout(buttonDisappearTimeout.current);
            }
            setIsModalDisplayed(true);
        }
    }, [isVisible]);

    return (
        <Styled.Container
            href={link}
            onClick={() => {
                onClick();
            }}
        >
            {isModalDisplayed && (
                <React.Fragment>
                    <Styled.Label $translateX={translateX} $isVisible={isVisible} $delay={delay}>
                        {label}
                    </Styled.Label>

                    <Styled.RightFwdIconStyled
                        $translateX={translateX}
                        $isVisible={isVisible}
                        $delay={delay}
                    />
                </React.Fragment>
            )}
        </Styled.Container>
    );
}
