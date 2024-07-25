"use client";
import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    const selfRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const delayPerLinkItem = 0.1;

    const menuItems: { label: string; link: string }[] = [
        { label: "HOME", link: "/" },
        { label: "FILMS", link: "/films" },
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

    useEffect(() => {
        if (selfRef.current) {
            const selfWidth = selfRef.current.offsetWidth;

            setTranslateX(selfWidth * -1);
        }
    }, [selfRef]);

    return (
        <React.Fragment>
            <Styled.Overlay onClick={onClose} $isVisible={isVisible} />
            <Styled.Container $isVisible={isVisible} ref={selfRef}>
                <Styled.Content>
                    <Styled.PagesContainer>
                        {menuItems.map((item, id) => (
                            <ModalLinkButton
                                onClick={onClose}
                                key={id}
                                label={item.label}
                                link={item.link}
                                translateX={translateX}
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
