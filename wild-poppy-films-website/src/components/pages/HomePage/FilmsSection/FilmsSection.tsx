"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";
import ScrollBanner from "@/components/ScrollBanner/ScrollBanner";

const FilmsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const scrollBannerDisplayTextList: string[] = ["blooming soon!"];

    return (
        <Styled.Container ref={ref}>
            <ScrollBanner displayTextList={scrollBannerDisplayTextList} variant="black" />
        </Styled.Container>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
