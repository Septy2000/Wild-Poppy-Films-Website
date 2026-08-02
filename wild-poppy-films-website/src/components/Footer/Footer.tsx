"use client";
import * as Styled from "./Footer.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { LegalButton } from "@/components/Buttons/LegalButton/LegalButton.styled";
import { companySocialLinks, mainNavigationLinks } from "@/data";

export default function Footer() {
    const socialItems: { icon: React.JSX.Element; link: string; label: string }[] = [
        {
            icon: <Styled.InstagramIconStyled />,
            link: companySocialLinks.instagram,
            label: "Wild Poppy Films on Instagram",
        },
        { icon: <Styled.TiktokIconStyled />, link: companySocialLinks.tiktok, label: "Wild Poppy Films on TikTok" },
        { icon: <Styled.YouTubeIconStyled />, link: companySocialLinks.youtube, label: "Wild Poppy Films on YouTube" },
    ];

    return (
        <Styled.Container as="footer">
            <Styled.TopFooterContainer>
                <Styled.LogoSocialsContainer>
                    <Styled.WildPoppyLogoAltXl aria-hidden="true" />
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
                </Styled.LogoSocialsContainer>
                <Styled.Separator />
                <Styled.PagesContainer as="nav" aria-label="Footer">
                    {mainNavigationLinks.map((page) => (
                        <ModalLinkButton key={page.label} label={page.label} href={page.link} />
                    ))}
                </Styled.PagesContainer>
            </Styled.TopFooterContainer>

            <Styled.SeparatorDesktop />
            <Styled.BottomFooterContainer>
                <Styled.LegalContainer>
                    <LegalButton href={"/terms-and-conditions"}>{`TERMS & CONDITIONS`}</LegalButton>
                </Styled.LegalContainer>
                {/* Derived so the notice doesn't silently go stale */}
                <Styled.CopyrightText>{`©️ WILD POPPY FILMS, ${new Date().getFullYear()}`}</Styled.CopyrightText>
            </Styled.BottomFooterContainer>
        </Styled.Container>
    );
}
