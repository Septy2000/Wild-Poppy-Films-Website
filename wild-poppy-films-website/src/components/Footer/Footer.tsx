"use client";
import * as Styled from "./Footer.styled";
import ModalLinkButton from "@/components/Buttons/ModalLinkButton/ModalLinkButton";
import ModalSocialButton from "@/components/Buttons/ModalSocialButton/ModalSocialButton";
import { LegalButton } from "@/components/Buttons/LegalButton/LegalButton.styled";
import { companySocialLinks, defaultPagesLinks } from "@/data";
import { useRouter } from "next/navigation";

export default function Footer() {
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
        { icon: <Styled.XIconStyled />, link: companySocialLinks.x },
        { icon: <Styled.FacebookIconStyled />, link: companySocialLinks.facebook },
        { icon: <Styled.YouTubeIconStyled />, link: companySocialLinks.youtube },
        { icon: <Styled.LinkedInIconStyled />, link: companySocialLinks.linkedin },
    ];

    function handleLinkClick(link: string) {
        router.push(link);
    }

    return (
        <Styled.Container>
            <Styled.TopFooterContainer>
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
                            onClick={() => handleLinkClick(page.link)}
                        />
                    ))}
                </Styled.PagesContainer>
            </Styled.TopFooterContainer>

            <Styled.SeparatorDesktop />
            <Styled.BottomFooterContainer>
                <Styled.LegalContainer>
                    <LegalButton href={"/terms-and-conditions"}>{`TERMS & CONDITIONS`}</LegalButton>
                    <LegalButton href={"/cookie-policy"}>{`COOKIE POLICY`}</LegalButton>
                </Styled.LegalContainer>
                <Styled.CopyrightText>{"©️ WILD POPPY FILMS, 2024"}</Styled.CopyrightText>
            </Styled.BottomFooterContainer>
        </Styled.Container>
    );
}
