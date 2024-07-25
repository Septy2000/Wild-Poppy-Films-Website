"use client";
import styled, { css } from "styled-components";
import WPLogoAltXl from "@/icons/logo/wp-logo-alt-xl.svg";
import FacebookIcon from "@/icons/social/fb-icon.svg";
import InstagramIcon from "@/icons/social/ig-icon.svg";
import LinkedInIcon from "@/icons/social/linkedin-icon.svg";
import YouTubeIcon from "@/icons/social/yt-icon.svg";
import XIcon from "@/icons/social/x-icon.svg";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    border-radius: 16px 16px 0 0;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    // mobile
    padding: 48px 24px;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 48px 128px;
    }
`;

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const SeparatorDesktop = styled(Separator)`
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;
export const TopFooterContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

export const LogoSocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    // mobile
    align-items: start;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        justify-content: space-between;
        align-items: end;
    }
`;

export const WildPoppyLogoAltXl = styled(WPLogoAltXl)`
    width: 96px;
    height: 64px;
`;

export const SocialsContainer = styled.div`
    display: flex;
    gap: 12px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    align-items: flex-start;
    justify-content: flex-start;
`;

export const LegalContainer = styled.div`
    display: flex;
    gap: 8px;

    // mobile
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const BottomFooterContainer = styled.div`
    display: flex;
    gap: 32px;

    // mobile
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const CopyrightText = styled.span`
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 15px */
    letter-spacing: -0.22px;
    color: ${({ theme }) => theme.colors.neutral.neutral_4};
`;

const IconStylingCss = css`
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;

export const FacebookIconStyled = styled(FacebookIcon)`
    ${IconStylingCss}
`;

export const InstagramIconStyled = styled(InstagramIcon)`
    ${IconStylingCss}
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
    ${IconStylingCss}
`;

export const YouTubeIconStyled = styled(YouTubeIcon)`
    path:nth-child(1) {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;

export const XIconStyled = styled(XIcon)`
    ${IconStylingCss}
`;
