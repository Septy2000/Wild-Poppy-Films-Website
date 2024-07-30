"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { companySocialLinks, defaultPagesLinks } from "@/data";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    const delayPerLinkItem = 0.1;

    const pagesItems: { label: string; link: string }[] = [
        { label: "HOME", link: defaultPagesLinks.home },
        { label: "FILMS", link: defaultPagesLinks.films },
        { label: "OUR TEAM", link: defaultPagesLinks.ourTeam },
        { label: "CONTACT", link: defaultPagesLinks.contact },
        { label: "SUPPORT US", link: defaultPagesLinks.supportUs },
    ];

    const socialItems: { icon: React.JSX.Element; link: string }[] = [
        { icon: <Styled.InstagramIconStyled />, link: companySocialLinks.instagram },
        { icon: <Styled.XIconStyled />, link: companySocialLinks.x },
        { icon: <Styled.FacebookIconStyled />, link: companySocialLinks.facebook },
        { icon: <Styled.YouTubeIconStyled />, link: companySocialLinks.youtube },
        { icon: <Styled.LinkedInIconStyled />, link: companySocialLinks.linkedin },
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
                            pagesItems.map((item, id) => (
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
