import React, { useEffect } from "react";
import * as Styled from "./Modal.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
    const menuItems: { label: string; link: string }[] = [
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

    return (
        <React.Fragment>
            {isVisible && <Styled.Overlay onClick={onClose} />}
            <Styled.Container $isVisible={isVisible}>
                <Styled.Content>
                    <Styled.PagesContainer>
                        {menuItems.map((item, id) => (
                            <ModalLinkButton key={id} label={item.label} link={item.link} />
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
