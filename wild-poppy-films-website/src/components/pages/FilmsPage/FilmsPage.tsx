"use client";
import React, { useState, useEffect } from "react";
import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";
import { useSearchParams } from "next/navigation";
import { FilterOptions } from "@/_types/common";
import { useInView } from "react-intersection-observer";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import useIsMobile from "@/hooks/useIsMobile";

export function FilmsPage() {
    const [selectedFilmFilter, setSelectedFilmFilter] = useState<FilterOptions>("all");
    const filters: { label: string; status: FilterOptions }[] = [
        {
            label: "ALL",
            status: "all",
        },
        {
            label: "AVAILABLE",
            status: "available",
        },
        {
            label: "COMING SOON",
            status: "coming_soon",
        },
    ];

    const searchParams = useSearchParams();
    const sort = searchParams.get("sort");

    const currentPage = searchParams.get("page");
    const filmsPerPage = 6;
    const isMobile = useIsMobile();

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    // Filter films based on the selected filter
    const filteredFilms = films.filter((film) => {
        if (selectedFilmFilter === "all") {
            return true;
        } else if (selectedFilmFilter === "available") {
            return film.status === "available";
        } else if (selectedFilmFilter === "coming_soon") {
            return film.status === "coming_soon" || film.status === "in_production";
        }
        return false;
    });

    useEffect(() => {
        if (sort) {
            setSelectedFilmFilter(sort as FilterOptions);
        }
    }, [sort]);
    return (
        <Styled.Container>
            <div style={{ height: "300px" }}></div>
            <Styled.TopFilmsPageControlsContainer>
                {!isMobile && (
                    <PaginationControl
                        numberOfItems={filteredFilms.length}
                        itemsPerPage={filmsPerPage}
                        handlePreviousPage={() => {}}
                        handleNextPage={() => {}}
                        handlePageChange={() => {}}
                        initialPage={currentPage ? parseInt(currentPage) : 1}
                    />
                )}
                <Styled.FilmsFilterContainer ref={ref}>
                    {filters.map((filter, index) => (
                        <Styled.FilmsFilter
                            key={index}
                            onClick={() => setSelectedFilmFilter(filter.status)}
                            $selected={selectedFilmFilter === filter.status}
                        >
                            {filter.label}
                        </Styled.FilmsFilter>
                    ))}
                </Styled.FilmsFilterContainer>
            </Styled.TopFilmsPageControlsContainer>

            <Styled.FilmsContainer>
                {filteredFilms.map((film, index) => (
                    <FilmContainerLarge
                        key={index}
                        film={film}
                        delay={index * delayPerItem}
                        inView={inView}
                    />
                ))}
            </Styled.FilmsContainer>
        </Styled.Container>
    );
}
