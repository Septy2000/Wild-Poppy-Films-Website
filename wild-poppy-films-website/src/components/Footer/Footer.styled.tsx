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
    padding: 48px 20px 40px 20px;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue};
`;

export const LogoSocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: start;
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

export const LegalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const ColFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CopyrightText = styled.span`
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 15px */
    letter-spacing: -0.22px;
    color: ${({ theme }) => theme.colors.neutral.neutral_4};
`;
