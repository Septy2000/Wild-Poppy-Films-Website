"use client";
import styled from "styled-components";
import Link from "next/link";

export const LegalButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 60%;
    }
    display: flex;
    height: 20px;
    padding: 4px 0;
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral.neutral_3};
`;
