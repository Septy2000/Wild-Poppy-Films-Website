"use client";
import styled from "styled-components";
import RightFwdIcon from "@/icons/navigation/right-fwd-icon.svg";

export const Container = styled.div`
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

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const RightFwdIconStyled = styled(RightFwdIcon)`
    path {
        fill: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;
