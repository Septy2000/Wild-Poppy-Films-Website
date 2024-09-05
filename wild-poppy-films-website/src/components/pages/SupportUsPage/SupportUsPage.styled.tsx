"use client";
import styled from "styled-components";
import WPFLogo from "@/icons/logo/wpf-logo-xl.svg";
import PoppyLogo from "@/icons/logo/wild-poppy-logo-black.svg";

export const PageWrapper = styled.div`
    margin-top: ${({ theme }) => theme.navbar_height.mobile};
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        margin-top: ${({ theme }) => theme.navbar_height.tablet};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin-top: ${({ theme }) => theme.navbar_height.desktop};
    }
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary.celadon_blue_dark_1};
`;

export const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    max-width: 150rem;
    width: 100%;

    padding: 3rem 1.25rem 1.5rem 1.25rem;
    gap: 4rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem 2.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 4rem 4rem 4rem;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding: 3rem 1.25rem;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 3rem 2.5rem.5rem 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 7.5rem 4rem 7.5rem 4rem;
        gap: 3rem;
    }

    max-width: 150rem;
`;

export const ContentBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    border-left: 4px solid ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;

export const OLStyled = styled.ol`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding-left: 2rem;
    }
`;

export const ULStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
`;

export const OLLIStyled = styled.li`
    font-size: 1rem;
    font-weight: 500;
    line-height: 120%;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
    }
`;

export const ULLIStyled = styled.li`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 120%;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1.5rem;
    }

    &::marker {
        content: "•  ";
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const ContentBlockTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    line-height: 120%;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 2rem;
        align-self: flex-start;
    }
`;

export const Text = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 120%;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 1.5rem;
    }
`;

export const BannerTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const BannerText = styled(Text)`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const ContentTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.secondary.celadon_blue_dark_1};
`;
export const BlockTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.primary.poppy_red_dark_1};
`;

export const BlockSubtitle = styled(Title)`
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const BlockText = styled(Text)`
    color: ${({ theme }) => theme.colors.neutral.neutral_11};
`;

export const VerticalFlexContainer = styled.div<{ $gap: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ $gap }) => $gap}rem;
`;

export const BannerInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    max-width: 50rem;
`;

export const WPFLogoStyled = styled(WPFLogo)`
    scale: 1.5;

    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
    display: none;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;

export const PoppyLogoStyled = styled(PoppyLogo)`
    scale: 0.5;
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red_dark_1};
    }
`;
