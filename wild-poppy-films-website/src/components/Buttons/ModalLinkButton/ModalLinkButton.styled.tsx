import styled, { keyframes, css } from "styled-components";
import Link from "next/link";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";
import { ModalLinkButtonStyledProps } from "@/_types/styledComponents";

export const Container = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 60%;
    }

    margin-right: 9px;
`;

const slideIn = (initialX: number) => keyframes`
  from {
    transform: translateX(${initialX}px);
  }
  to {
    transform: translateX(0);
  }
`;

const slideAnimation = (translateX: number, delay: number) => css`
    transform: translateX(${translateX}px);
    animation: ${slideIn(translateX)} 0.2s ease forwards;
    animation-delay: ${delay}s;
`;

export const Label = styled.p<ModalLinkButtonStyledProps>`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    // move the label outside of view to the left;
    ${({ $translateX, $delay }) => slideAnimation($translateX, $delay)}
`;

export const RightFwdIconStyled = styled(RightFwdIcon)<ModalLinkButtonStyledProps>`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
    ${({ $translateX, $delay }) => slideAnimation($translateX, $delay)}
`;
