import Image from "next/image";
import styled from "styled-components";
import ArrowLeft from "@/icons/navigation/home-hero-back-icon-mobile.svg";
import ArrowRight from "@/icons/navigation/home-hero-forward-icon-mobile.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: fit-content;
    position: relative;
    user-select: none;
`;

export const Carousel = styled.div<{ $currentImageIndex: number }>`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    height: fit-content;
    justify-items: center;
    transition: transform 0.2s ease-in-out;
    padding-left: calc(50vw - 7.5rem);

    transform: ${({ $currentImageIndex }) => `translateX(-${$currentImageIndex * 17}rem) `};
`;

export const ImageStyled = styled(Image)`
    object-fit: cover;
    width: 15rem;
    height: auto;
    aspect-ratio: 1 / 1;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 8px;
`;

export const ArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.neutral_shaded.neutral_6};

    transition: transform 0.2s;
    &:active {
        transform: scale(0.9);
    }
`;

export const ArrowLeftStyled = styled(ArrowLeft)``;

export const ArrowRightStyled = styled(ArrowRight)``;

export const ArrowsContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    justify-content: space-between;
`;

export const ImageCounter = styled.p`
    margin-top: 1rem;
    align-self: center;
`;
