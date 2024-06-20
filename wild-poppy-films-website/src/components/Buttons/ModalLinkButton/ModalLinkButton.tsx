import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./ModalLinkButton.styled";
import { ModalLinkButtonProps } from "@/_types/components";

export default function ModalLinkButton({
    label,
    link,
    translateX,
    isVisible,
    delay,
}: ModalLinkButtonProps) {
    const [isModalDisplayed, setIsModalDisplayed] = useState(true);
    const timeOuts = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => {
        if (!isVisible) {
            console.log("close");
            const disappearTimeout = setTimeout(() => {
                setIsModalDisplayed(false);
            }, 500);
            timeOuts.current.push(disappearTimeout);
        } else {
            console.log("open");
            timeOuts.current.forEach((id) => clearTimeout(id));
            setIsModalDisplayed(true);
        }
    }, [isVisible]);

    useEffect(() => {
        console.log(isModalDisplayed);
    }, [isModalDisplayed]);

    return (
        <Styled.Container href={link}>
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
