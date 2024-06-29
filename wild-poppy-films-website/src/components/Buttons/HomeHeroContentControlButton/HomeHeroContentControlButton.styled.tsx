import styled from "styled-components";
import RightArrow from "@/icons/navigation/home-hero-forward-icon-mobile.svg";
import LeftIcon from "@/icons/navigation/home-hero-back-icon-mobile.svg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: transparent;
    padding: 6px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
        z-index: 3;
        background: ${({ theme }) => theme.colors.neutral_shaded.neutral_6};
    }
`;

export const LeftArrowIcon = styled(LeftIcon)``;

export const RightArrowIcon = styled(RightArrow)``;
