"use client";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const StyledImage = styled(Image)<{ $imageIndex: number }>`
    object-fit: cover;
    /* aspect-ratio: 5 / 3; for desktop */
    width: 100%;
    height: 100%;
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    translate: ${({ $imageIndex }) => -100 * $imageIndex}%;

    transition: translate 0.2s ease-in-out;
`;
