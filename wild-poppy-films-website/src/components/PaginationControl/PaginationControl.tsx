"use client";
import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./PaginationControl.styled";
import { PaginationControlProps } from "@/_types/components";

export default function PaginationControl({
    currentPage,
    numberOfPages,
    handlePageChange,
}: PaginationControlProps) {
    return (
        <Styled.Container>
            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage === 1}
                onClick={() => {
                    handlePageChange(currentPage - 1);
                }}
            >
                <Styled.SimpleArrowLeftStyled />
            </Styled.PageControlContainer>

            {Array.from({ length: numberOfPages }).map((_, index) => (
                <Styled.PageNumberContainer
                    key={index}
                    $isSelected={currentPage === index + 1}
                    onClick={() => {
                        handlePageChange(index + 1);
                    }}
                >
                    {index + 1}
                </Styled.PageNumberContainer>
            ))}

            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage === numberOfPages}
                onClick={() => {
                    handlePageChange(currentPage + 1);
                }}
            >
                <Styled.SimpleArrowRightStyled />
            </Styled.PageControlContainer>
        </Styled.Container>
    );
}
