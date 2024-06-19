import React, { useEffect } from "react";
import * as Styled from "./Modal.styled";

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
                        {menuItems.map((item) => (
                            <Styled.PageItem key={item.label} onClick={onClose}>
                                <Styled.PageName>{item.label}</Styled.PageName>
                                <Styled.RightFwdIconStyled />
                            </Styled.PageItem>
                        ))}
                    </Styled.PagesContainer>
                    <Styled.SocialsContainer>
                        {socialItems.map((item, index) => (
                            <Styled.SocialItem key={index} href={item.link} target="_blank">
                                {item.icon}
                            </Styled.SocialItem>
                        ))}
                    </Styled.SocialsContainer>
                </Styled.Content>
            </Styled.Container>
        </React.Fragment>
    );
}
