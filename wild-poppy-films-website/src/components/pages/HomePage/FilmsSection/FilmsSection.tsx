"use client";
import * as Styled from "./FilmsSection.styled";
import React, { forwardRef } from "react";

const FilmsSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Styled.Container ref={ref}>
            <h2>Films</h2>
        </Styled.Container>
    );
});
FilmsSection.displayName = "FilmsSection";
export default FilmsSection;
