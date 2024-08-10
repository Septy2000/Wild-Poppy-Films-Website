"use client";
import styled from "styled-components";

export const Container = styled.div`
    padding-top: ${({ theme }) => theme.navbar_height.mobile};

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding-top: ${({ theme }) => theme.navbar_height.tablet};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding-top: ${({ theme }) => theme.navbar_height.desktop};
    }
`;

export const MembersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 0;
`;
