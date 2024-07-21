import * as Styled from "./Footer.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { LegalButton } from "@/components/Buttons/LegalButton/LegalButton.styled";

export default function Footer() {
    const pagesItems: { label: string; link: string }[] = [
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
    return (
        <Styled.Container>
            <Styled.LogoSocialsContainer>
                <Styled.WildPoppyLogoAltXl />
                <Styled.SocialsContainer>
                    {socialItems.map((item, id) => (
                        <ModalSocialButton key={id} icon={item.icon} link={item.link} />
                    ))}
                </Styled.SocialsContainer>
            </Styled.LogoSocialsContainer>
            <Styled.Separator />
            <Styled.PagesContainer>
                {pagesItems.map((page, id) => (
                    <ModalLinkButton
                        key={id}
                        label={page.label}
                        link={page.link}
                        translateX={0}
                        isVisible={true}
                        delay={0}
                    />
                ))}
            </Styled.PagesContainer>
            <Styled.Separator />
            <Styled.LegalContainer>
                <Styled.ColFlexContainer>
                    <LegalButton href={"/terms-and-conditions"}>{`TERMS & CONDITIONS`}</LegalButton>
                    <LegalButton href={"/cookie-policy"}>{`COOKIE POLICY`}</LegalButton>
                </Styled.ColFlexContainer>
                <Styled.CopyrightText>{"©️ WILD POPPY FILMS, 2024"}</Styled.CopyrightText>
            </Styled.LegalContainer>
        </Styled.Container>
    );
}