import React, { useEffect } from "react";
import * as Styled from "./Modal.styled";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isVisible]);

    return (
        <React.Fragment>
            {isVisible && <Styled.Overlay onClick={onClose} />}
            <Styled.Container $isVisible={isVisible}>
                <Styled.Content>
                    <Styled.ItemsContainer>Test</Styled.ItemsContainer>
                    <Styled.SocialItemsContainer>Test</Styled.SocialItemsContainer>
                </Styled.Content>
            </Styled.Container>
        </React.Fragment>
    );
}
