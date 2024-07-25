"use client";
import styled, { css } from "styled-components";
import FacebookIcon from "@/icons/social/fb-icon.svg";
import InstagramIcon from "@/icons/social/ig-icon.svg";
import LinkedInIcon from "@/icons/social/linkedin-icon.svg";
import YouTubeIcon from "@/icons/social/yt-icon.svg";
import XIcon from "@/icons/social/x-icon.svg";

export const Overlay = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    background-color: rgba(0, 0, 0, 0.4);

    z-index: 9998;

    top: 60px;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        top: 96px;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        top: 112px;
    }
`;

export const Container = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    transition: transform 0.5s;
    z-index: 9999;

    padding: 20px 48px;
    width: 100%;
    height: 100%;
    top: 60px;
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        width: 50%;
        top: 96px;
        transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 48px 60px 48px 20px;
        width: 25%;
        top: 112px;
        transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 16px;

    align-items: flex-start;
    justify-content: flex-start;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        align-items: flex-end;
        justify-content: flex-end;
    }
`;

export const SocialsContainer = styled.div`
    display: flex;
    gap: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
    }
`;

// icons

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
