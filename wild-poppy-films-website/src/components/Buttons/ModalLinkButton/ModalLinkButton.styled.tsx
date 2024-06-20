import styled, { keyframes } from "styled-components";
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

export const Label = styled.p<ModalLinkButtonStyledProps>`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    // move the label outside of view to the left;
    transform: ${({ $translateX }) => `translateX(${$translateX}px)`};
    animation: ${({ $translateX }) => slideIn($translateX)} 0.2s ease forwards;
    animation-delay: ${({ $delay }) => `${$delay + 0.2}s`};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)<ModalLinkButtonStyledProps>`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
    transform: ${({ $translateX }) => `translateX(${$translateX}px)`};
    animation: ${({ $translateX }) => slideIn($translateX)} 0.2s ease forwards;
    animation-delay: ${({ $delay }) => `${$delay + 0.2}s`};
`;
