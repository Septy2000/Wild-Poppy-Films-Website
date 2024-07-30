"use client";
import React, { useState, useEffect, useRef } from "react";
import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";
import { FilterOptions } from "@/_types/common";
import { useInView } from "react-intersection-observer";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import useIsMobile from "@/hooks/useIsMobile";

export function FilmsPage() {
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
    const filter = searchParams.get("filter") ?? "all";

    const router = useRouter();

    const currentPage = parseInt(searchParams.get("page") ?? "1");
    const filmsPerPage = 6;
    const numberOfPages = Math.ceil(films.length / filmsPerPage);
    const isMobile = useIsMobile();

    const delayPerItem = 0.1;
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    // Filter films based on the selected filter
    const filteredFilms = films.filter((film) => {
        switch (filter) {
            case "all":
                return true;
            case "available":
                return film.status === "available";
            case "coming_soon":
                return film.status === "coming_soon" || film.status === "in_production";
            default:
                return false;
        }
    });

    useEffect(() => {
        if (currentPage > numberOfPages) {
            router.push(`/films?page=${numberOfPages}&filter=${filter}`);
        }
    }, [currentPage, numberOfPages, filter]);

    const handlePageChange = (toPage: number) => {
        if (toPage < 1 || toPage > numberOfPages || toPage === currentPage) return;

        router.push(`/films?page=${toPage}&filter=${filter}`);
    };

    const handleFilterChange = (toFilter: FilterOptions) => {
        // sort = toFilter;
        router.push(`/films?page=1&filter=${toFilter}`);
    };

    return (
        <Styled.Container>
            <div style={{ height: "300px" }}></div>
            <Styled.TopFilmsPageControlsContainer>
                {!isMobile && (
                    <PaginationControl
                        numberOfPages={numberOfPages}
                        handlePageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                )}
                <Styled.FilmsFilterContainer ref={ref}>
                    {filters.map((filterOption, index) => (
                        <Styled.FilmsFilter
                            key={index}
                            onClick={() => handleFilterChange(filterOption.status)}
                            $selected={filter === filterOption.status}
                        >
                            {filterOption.label}
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
            <PaginationControl
                numberOfPages={numberOfPages}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
            />
        </Styled.Container>
    );
}
