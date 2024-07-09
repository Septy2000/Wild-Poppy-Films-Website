import Image from "next/image";
import styled from "styled-components";
import PoppyLogoSketch from "@/icons/logo/poppy-logo-sketch.svg";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; // 2 columns
    grid-template-rows: repeat(3, auto); // 3 rows
    flex-grow: 1;
    row-gap: 16px;
    column-gap: 24px;
    padding: 48px 20px 120px 20px;
    align-items: start;
    justify-items: center;
    justify-content: center;

    // Select every element in the first column
    & > :nth-child(2n + 1) {
        margin-top: 28px;
        align-items: start;
    }
`;

export const CarouselItem = styled(Image)`
    width: 128px;
    height: 128px;
`;

export const PoppyLogo = styled(PoppyLogoSketch)`
    position: relative;
    top: -300px;
    right: -80px;
    z-index: -1;
`;
