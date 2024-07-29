"use client";
import React, { useEffect, useState } from "react";
import * as Styled from "./PaginationControl.styled";
export default function PaginationControl({
    numberOfItems,
    itemsPerPage,
    handlePreviousPage,
    handleNextPage,
    handlePageChange,
    initialPage,
}: {
    numberOfItems: number;
    itemsPerPage: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handlePageChange: (toPage: number) => void;
    initialPage: number;
}) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

    useEffect(() => {
        handlePageChange(currentPage);
    }, [currentPage]);

    return (
        <Styled.Container>
            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage === 1}
                onClick={() => {
                    currentPage !== 1 && handlePreviousPage();
                }}
            >
                <Styled.SimpleArrowLeftStyled />
            </Styled.PageControlContainer>

            {Array.from({ length: numberOfPages }).map((_, index) => (
                <Styled.PageNumberContainer
                    key={index}
                    $isSelected={currentPage === index + 1}
                    onClick={() => {
                        currentPage !== index + 1 && setCurrentPage(index + 1);
                    }}
                >
                    {index + 1}
                </Styled.PageNumberContainer>
            ))}

            <Styled.PageControlContainer
                $isSelected={false}
                $isInactive={currentPage === numberOfPages}
                onClick={() => {
                    currentPage !== numberOfPages && handleNextPage();
                }}
            >
                <Styled.SimpleArrowRightStyled />
            </Styled.PageControlContainer>
        </Styled.Container>
    );
}
