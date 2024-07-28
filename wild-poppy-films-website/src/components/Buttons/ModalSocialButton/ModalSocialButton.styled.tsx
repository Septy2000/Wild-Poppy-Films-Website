"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled(Link)`
    text-decoration: none;
    display: flex;
    width: 38px;
    height: 38px;
    border-radius: 16%;
    align-items: center;
    justify-content: center;

    background: transparent;
    &:hover {
        background: ${({ theme }) => theme.colors.neutral.neutral_11};
        opacity: 60%;
    }
`;
