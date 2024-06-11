import styled from "styled-components";
import WpAltXlLogo from "@/icons/logo/wp-logo-alt-xl.svg";
import WpAltXsLogo from "@/icons/logo/wp-logo-alt-xs.svg";
import MenOpenIcon from "@/icons/navigation/menu-icon-open-mobile.svg";
import MenCloseIcon from "@/icons/navigation/menu-icon-close-mobile.svg";

interface HeaderProps {
    $isModalOpen: boolean;
    $isHidden: boolean;
    $isTransparent: boolean;
}

export const Header = styled.header<HeaderProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    color: ${({ theme }) => theme.colors.neutral.neutral_1};

    transition: top 0.3s, background 0.3s, color 0.3s;

    padding: 10px 20px;
    position: fixed;
    top: ${({ $isHidden }) => ($isHidden ? "-60px" : "0")};
    width: 100%;
    z-index: 1000;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 16px 40px;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 24px 64px;
        top: ${({ $isHidden }) => ($isHidden ? "-112px" : "0")};
    }

    path {
        fill: ${({ $isModalOpen, theme }) =>
            $isModalOpen
                ? theme.colors.secondary.core_green_light_2
                : theme.colors.neutral.neutral_1};
    }

    p {
        color: ${({ $isModalOpen, theme }) =>
            $isModalOpen
                ? theme.colors.secondary.core_green_light_2
                : theme.colors.neutral.neutral_1};
    }
`;

export const MenuRhsContainer = styled.div`
    display: flex;
    flex-direction: row;
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
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const WildPoppyAltXlLogo = styled(WpAltXlLogo)`
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;
