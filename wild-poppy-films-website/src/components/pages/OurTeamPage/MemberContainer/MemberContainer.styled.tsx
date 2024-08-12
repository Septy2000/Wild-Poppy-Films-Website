"use client";
import styled from "styled-components";
import DownwardIcon from "@/icons/navigation/downward-icon-mobile.svg";
import InstagramIcon from "@/icons/social/ig-icon.svg";
import ImdbIcon from "@/icons/social/imdb-icon.svg";
import Image from "next/image";

export const Container = styled.div`
    width: 100%;
    border-radius: 2.5rem 0 2.5rem 0;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1.25rem;
`;

export const HeaderInfoContainer = styled.div`
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ExpandedInfoContainer = styled.div<{ $isExpanded: boolean }>`
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 0.5rem;
    width: 100%;
    transition: max-height 0.2s ease-in-out;
    max-height: ${({ $isExpanded }) => ($isExpanded ? "450px" : "0")};
    overflow: hidden;
`;

export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    padding: 1px;
    border-radius: 0.5rem 3rem 0.5rem 3rem;
    background: linear-gradient(145deg, #ff0000 40%, #ffffff 60%);
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1 / 1.5;
    max-height: 450px;
`;

export const ImageStyled = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 3rem 0.5rem 3rem;
`;

export const MemberInfoContainer = styled.div`
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
`;

export const SocialsContainer = styled.div`
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ExpandContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    border-radius: 0rem 0 2.5rem 0;
    padding: 0.5rem;
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const StyledDownwardIcon = styled(DownwardIcon)<{ $isExpanded: boolean }>`
    path {
        fill: ${({ theme }) => theme.colors.secondary.celadon_blue_light_1};
    }

    transform: ${({ $isExpanded }) => ($isExpanded ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Name = styled.h2`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const Text = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    line-height: 150%;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        font-size: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const GreenText = styled(Text)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;

export const InstagramIconStyled = styled(InstagramIcon)`
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;

export const ImdbIconStyled = styled(ImdbIcon)`
    path:nth-child(2) {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }
`;
