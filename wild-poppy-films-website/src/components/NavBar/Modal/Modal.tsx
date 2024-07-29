"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    const delayPerLinkItem = 0.1;

    const menuItems: { label: string; link: string }[] = [
        { label: "HOME", link: "/" },
        { label: "FILMS", link: "/films?page=1" },
        { label: "OUR TEAM", link: "/our-team" },
        { label: "CONTACT", link: "/contact" },
        { label: "SUPPORT US", link: "/support-us" },
    ];

    const socialItems: { icon: React.JSX.Element; link: string }[] = [
        { icon: <Styled.InstagramIconStyled />, link: "https://www.instagram.com" },
        { icon: <Styled.XIconStyled />, link: "https://www.x.com" },
        { icon: <Styled.FacebookIconStyled />, link: "https://www.facebook.com" },
        { icon: <Styled.YouTubeIconStyled />, link: "https://www.youtube.com" },
        { icon: <Styled.LinkedInIconStyled />, link: "https://www.linkedin.com" },
    ];

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isVisible]);

    const [arePageButtonsDisplayed, setArePageButtonsDisplayed] = useState(true);
    const buttonDisappearTimeout = useRef<NodeJS.Timeout | null>(null);

    // make the button disappear after the modal animation is finished
    // 500ms is the duration of the modal animation
    useEffect(() => {
        if (!isVisible) {
            buttonDisappearTimeout.current = setTimeout(() => {
                setArePageButtonsDisplayed(false);
            }, 500);
        } else {
            if (buttonDisappearTimeout.current) {
                clearTimeout(buttonDisappearTimeout.current);
            }
            setArePageButtonsDisplayed(true);
        }
    }, [isVisible]);

    return (
        <React.Fragment>
            <Styled.Overlay onClick={onClose} $isVisible={isVisible} />
            <Styled.Container $isVisible={isVisible}>
                <Styled.Content>
                    <Styled.PagesContainer>
                        {arePageButtonsDisplayed &&
                            menuItems.map((item, id) => (
                                <ModalLinkButton
                                    onClick={onClose}
                                    key={id}
                                    label={item.label}
                                    link={item.link}
                                    isVisible={isVisible}
                                    delay={(id + 1) * delayPerLinkItem}
                                />
                            ))}
                    </Styled.PagesContainer>
                    <Styled.SocialsContainer>
                        {socialItems.map((item, id) => (
                            <ModalSocialButton key={id} icon={item.icon} link={item.link} />
                        ))}
                    </Styled.SocialsContainer>
                </Styled.Content>
            </Styled.Container>
        </React.Fragment>
    );
}
