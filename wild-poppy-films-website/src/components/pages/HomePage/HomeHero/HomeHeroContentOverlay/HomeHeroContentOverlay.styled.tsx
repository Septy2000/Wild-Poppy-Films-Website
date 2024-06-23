import styled from "styled-components";

import ForwardIcon from "@/icons/navigation/home-hero-forward-icon-mobile.svg";
import BackIcon from "@/icons/navigation/home-hero-back-icon-mobile.svg";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "." "controls" "movie-title-and-counter";
    user-select: none;
`;

export const MovieControlsContainer = styled.div`
    grid-area: controls;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 12px auto;
`;

export const MovieBackIcon = styled(BackIcon)`
    cursor: pointer;
`;

export const MovieForwardIcon = styled(ForwardIcon)`
    cursor: pointer;
`;

export const MovieTitleAndCounterContainer = styled.div`
    grid-area: movie-title-and-counter;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
`;

export const MovieTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MovieTitle = styled.h2`
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const MovieYear = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary.celadon_blue};
    opacity: 40%;
`;
