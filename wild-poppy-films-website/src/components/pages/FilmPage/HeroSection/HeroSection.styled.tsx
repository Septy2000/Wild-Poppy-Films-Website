import styled from "styled-components";
import { generateSlideAnimation } from "@/utils/animationUtils";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;

    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 8rem;
        padding-bottom: 5rem;
    }
    overflow: hidden;
`;

export const DescriptionContainer = styled.div`
    padding: 1.25rem;
    padding-bottom: 2rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 0 4rem;
    }
`;

export const DescriptionText = styled.p`
    font-size: 1rem;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.neutral.neutral_3};
`;

export const ProductionContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
    padding: 3rem 1.25rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background: ${({ theme }) => theme.colors.neutral.neutral_14};
        max-width: 48rem;
        padding: 0 4rem;
    }
`;

export const ProductionPairContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    }
`;

export const PlainText = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        color: ${({ theme }) => theme.colors.neutral.neutral_1};
    }
`;

export const PlainTextGreen = styled(PlainText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;

export const Spacer = styled.div`
    height: 2rem;
    width: 100%;
`;
