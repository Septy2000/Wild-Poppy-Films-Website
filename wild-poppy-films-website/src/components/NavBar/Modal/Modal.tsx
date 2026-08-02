"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { companySocialLinks, mainNavigationLinks } from "@/data";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function Modal({
    isVisible,
    onClose,
    id,
}: {
    isVisible: boolean;
    onClose: () => void;
    id: string;
}) {
    const delayPerLinkItem = 0.1;

    const socialItems: { icon: React.JSX.Element; link: string; label: string }[] = [
        {
            icon: <Styled.InstagramIconStyled />,
            link: companySocialLinks.instagram,
            label: "Wild Poppy Films on Instagram",
        },
        { icon: <Styled.YouTubeIconStyled />, link: companySocialLinks.youtube, label: "Wild Poppy Films on YouTube" },
        { icon: <Styled.TiktokIconStyled />, link: companySocialLinks.tiktok, label: "Wild Poppy Films on TikTok" },
    ];

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isVisible]);

    // Escape is the expected way out of an open overlay for keyboard users.
    useEffect(() => {
        if (!isVisible) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isVisible, onClose]);

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
            <Styled.Overlay onClick={onClose} $isVisible={isVisible} aria-hidden="true" />
            <Styled.Container
                id={id}
                $isVisible={isVisible}
                // Keeps the links out of the tab order and away from screen readers while
                // the menu is closed - they stay mounted so the slide animation can run.
                aria-hidden={!isVisible}
            >
                {/* The whole panel unmounts once the close animation has finished. Leaving
                    focusable links inside an aria-hidden container would let keyboard users
                    tab into an off-screen menu they cannot see. */}
                {arePageButtonsDisplayed && (
                    <Styled.Content>
                        <Styled.PagesContainer as="nav" aria-label="Main">
                            {mainNavigationLinks.map((item, index) => (
                                <ScrollIntoViewAnimationWrapper
                                    key={item.label}
                                    $animationDelay={index * delayPerLinkItem}
                                    $inView={true}
                                    $axis="X"
                                    $direction={-1}
                                >
                                    <ModalLinkButton
                                        href={item.link}
                                        label={item.label}
                                        onClick={onClose}
                                    />
                                </ScrollIntoViewAnimationWrapper>
                            ))}
                        </Styled.PagesContainer>
                        <Styled.SocialsContainer>
                            {socialItems.map((item) => (
                                <ModalSocialButton
                                    key={item.label}
                                    icon={item.icon}
                                    link={item.link}
                                    label={item.label}
                                />
                            ))}
                        </Styled.SocialsContainer>
                    </Styled.Content>
                )}
            </Styled.Container>
        </React.Fragment>
    );
}
