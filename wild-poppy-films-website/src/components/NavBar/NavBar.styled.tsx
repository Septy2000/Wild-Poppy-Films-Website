"use client";

import styled from "styled-components";
import WpAltXlLogo from "@/icons/logo/wp-logo-alt-xl.svg";
import WpAltXsLogo from "@/icons/logo/wp-logo-alt-xs.svg";
import MenOpenIcon from "@/icons/navigation/menu-icon-open-mobile.svg";
import MenCloseIcon from "@/icons/navigation/menu-icon-close-mobile.svg";

interface HeaderProps {
    $isModalOpen: boolean;
    $isHidden: boolean;
    $isOverContent: boolean;
}

export const Header = styled.header<HeaderProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme, $isOverContent, $isModalOpen }) =>
        $isOverContent && !$isModalOpen ? "transparent" : theme.colors.neutral.neutral_14};

    color: ${({ $isModalOpen, theme }) =>
        $isModalOpen ? theme.colors.secondary.core_green_light_2 : theme.colors.neutral.neutral_1};
    position: fixed;
    transition: top 0.2s, background 0.5s, color 0.5s;
    width: 100%;
    z-index: 1000;

    path {
        transition: fill 0.5s;

        fill: ${({ $isModalOpen, theme }) =>
            $isModalOpen
                ? theme.colors.secondary.core_green_light_2
                : theme.colors.neutral.neutral_1};
    }

    // mobile
    height: 60px;
    padding: 10px 20px;
    top: ${({ $isHidden }) => ($isHidden ? "-60px" : "0")};

    // tablet
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        height: 96px;
        padding: 16px 40px;
        top: ${({ $isHidden }) => ($isHidden ? "-96px" : "0")};
    }

    // desktop
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        height: 112px;
        padding: 24px 64px;
        top: ${({ $isHidden }) => ($isHidden ? "-112px" : "0")};
    }
`;

export const MenuRhsContainer = styled.div`
    display: flex;
    flex-direction: row;
    user-select: none;
    align-items: center;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

export const MenuText = styled.p`
    margin-right: 16px;
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;

export const MenuOpenIcon = styled(MenOpenIcon)``;

export const MenuCloseIcon = styled(MenCloseIcon)``;

export const WildPoppyAltXsLogo = styled(WpAltXsLogo)`
    cursor: pointer;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const WildPoppyAltXlLogo = styled(WpAltXlLogo)`
    cursor: pointer;
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;
