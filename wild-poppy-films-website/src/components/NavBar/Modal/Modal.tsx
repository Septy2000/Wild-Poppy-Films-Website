"use client";
import React, { useEffect, useState, useRef } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { companySocialLinks, defaultPagesLinks } from "@/data";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";
import { useRouter } from "next/navigation";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    const delayPerLinkItem = 0.1;

    const router = useRouter();

    const pagesItems: { label: string; link: string }[] = [
        { label: "HOME", link: defaultPagesLinks.home },
        { label: "FILMS", link: defaultPagesLinks.films },
        { label: "OUR TEAM", link: defaultPagesLinks.ourTeam },
        { label: "CONTACT", link: defaultPagesLinks.contact },
        { label: "SUPPORT US", link: defaultPagesLinks.supportUs },
    ];

    const socialItems: { icon: React.JSX.Element; link: string }[] = [
        { icon: <Styled.InstagramIconStyled />, link: companySocialLinks.instagram },
        { icon: <Styled.YouTubeIconStyled />, link: companySocialLinks.youtube },
        { icon: <Styled.TiktokIconStyled />, link: companySocialLinks.tiktok },
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

    function handleButtonClick(path: string) {
        router.push(path);
        onClose();
    }

    return (
        <React.Fragment>
            <Styled.Overlay onClick={onClose} $isVisible={isVisible} />
            <Styled.Container $isVisible={isVisible}>
                <Styled.Content>
                    <Styled.PagesContainer>
                        {arePageButtonsDisplayed &&
                            pagesItems.map((item, id) => (
                                <ScrollIntoViewAnimationWrapper
                                    key={id}
                                    $animationDelay={id * delayPerLinkItem}
                                    $inView={true}
                                    $axis="X"
                                    $direction={-1}
                                >
                                    <ModalLinkButton
                                        onClick={() => handleButtonClick(item.link)}
                                        label={item.label}
                                    />
                                </ScrollIntoViewAnimationWrapper>
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
