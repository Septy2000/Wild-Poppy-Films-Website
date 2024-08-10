import Image from "next/image";
import styled from "styled-components";
import { generateSlideAnimation } from "@/utils/animationUtils";

export const Container = styled.div<{ $animationDelay: number; $inView: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    max-width: 24rem;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
    flex: 1;
    height: 100%;

    opacity: 0;
    ${({ $animationDelay, $inView }) => $inView && generateSlideAnimation("Y", 1, $animationDelay)}
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
