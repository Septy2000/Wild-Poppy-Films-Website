"use client";
import React from "react";
import * as Styled from "./PaginationControl.styled";
import { PaginationControlProps } from "@/_types/components";

export default function PaginationControl({
    currentPage,
    numberOfPages,
    handlePageChange,
}: PaginationControlProps) {
    return (
        <Styled.Container as="nav" aria-label="Film list pages">
            <Styled.PageControlContainer
                type="button"
                aria-label="Previous page"
                $isSelected={false}
                $isInactive={currentPage === 1}
                disabled={currentPage === 1}
                onClick={() => {
                    handlePageChange(currentPage - 1);
                }}
            >
                <Styled.SimpleArrowLeftStyled aria-hidden="true" />
            </Styled.PageControlContainer>

            {Array.from({ length: numberOfPages }).map((_, index) => (
                <Styled.PageNumberContainer
                    key={index}
                    type="button"
                    aria-label={`Page ${index + 1}`}
                    // Tells assistive tech which page is current, rather than leaving
                    // that to the background colour alone.
                    aria-current={currentPage === index + 1 ? "page" : undefined}
                    $isSelected={currentPage === index + 1}
                    onClick={() => {
                        handlePageChange(index + 1);
                    }}
                >
                    {index + 1}
                </Styled.PageNumberContainer>
            ))}

            <Styled.PageControlContainer
                type="button"
                aria-label="Next page"
                $isSelected={false}
                $isInactive={currentPage === numberOfPages}
                disabled={currentPage === numberOfPages}
                onClick={() => {
                    handlePageChange(currentPage + 1);
                }}
            >
                <Styled.SimpleArrowRightStyled aria-hidden="true" />
            </Styled.PageControlContainer>
        </Styled.Container>
    );
}
