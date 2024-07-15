"use client";
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;

    border-radius: 16px 16px 0 0;
    padding: 48px 20px 40px 20px;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
`;

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue};
`;

export const TestDiv = styled.div`
    height: 100px;
    width: 100%;
`;
