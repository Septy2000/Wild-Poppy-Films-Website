import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    min-width: 16rem;
    max-width: 32rem;
    height: auto;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const ImageStyled = styled(Image)`
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 0.25rem;
`;

export const Content = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    line-height: 150%;
`;
