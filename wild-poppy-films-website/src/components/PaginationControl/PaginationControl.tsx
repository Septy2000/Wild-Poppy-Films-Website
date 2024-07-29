"use client";
import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./PaginationControl.styled";
import { PaginationControlProps } from "@/_types/components";

export default function PaginationControl({
    numberOfItems,
    itemsPerPage,
    handlePageChange,
    initialPage,
}: PaginationControlProps) {
    const currentPage = useRef(initialPage);
    const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

    useEffect(() => {
        handlePageChange(currentPage.current);
    }, [currentPage]);

    return (
        <Styled.Container>
            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage.current === 1}
                onClick={() => {
                    if (currentPage.current !== 1) {
                        handlePageChange(currentPage.current - 1);
                    }
                }}
            >
                <Styled.SimpleArrowLeftStyled />
            </Styled.PageControlContainer>

            {Array.from({ length: numberOfPages }).map((_, index) => (
                <Styled.PageNumberContainer
                    key={index}
                    $isSelected={currentPage.current === index + 1}
                    onClick={() => {
                        if ((currentPage.current = index + 1)) {
                            handlePageChange(index + 1);
                        }
                    }}
                >
                    {index + 1}
                </Styled.PageNumberContainer>
            ))}

            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage.current === numberOfPages}
                onClick={() => {
                    if (currentPage.current !== numberOfPages) {
                        handlePageChange(currentPage.current + 1);
                    }
                }}
            >
                <Styled.SimpleArrowRightStyled />
            </Styled.PageControlContainer>
        </Styled.Container>
    );
}
