"use client";
import React, { useState, useEffect } from "react";
import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";
import { FilterOptions } from "@/_types/common";
import { useInView } from "react-intersection-observer";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
import useIsMobile from "@/hooks/useIsMobile";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

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

    const title = "FILMS";
    const description = "Our blooming film directory.";

    const searchParams = useSearchParams();
    const filter = searchParams.get("filter") ?? "all";

    const router = useRouter();

    const currentPage = parseInt(searchParams.get("page") ?? "1");
    const filmsPerPage = 3;
    const isMobile = useIsMobile();

    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.1,
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

    const startIndex = (currentPage - 1) * filmsPerPage;
    const endIndex = startIndex + filmsPerPage;
    const filmsToDisplay = filteredFilms.slice(startIndex, endIndex);

    const [numberOfPages, setNumberOfPages] = useState(
        Math.ceil(filteredFilms.length / filmsPerPage)
    );

    useEffect(() => {
        setNumberOfPages(Math.ceil(filteredFilms.length / filmsPerPage));
    }, [filteredFilms]);

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
        router.push(`/films?page=1&filter=${toFilter}`);
    };

    return (
        <Styled.PageWrapper>
            <TitleBuffer title={title} description={description} />
            <Styled.Container>
                <Styled.TopFilmsPageControlsContainer>
                    {!isMobile && (
                        <ScrollIntoViewAnimationWrapper
                            $inView={inView}
                            $animationDelay={0}
                            $axis="Y"
                            $direction={1}
                        >
                            <PaginationControl
                                numberOfPages={numberOfPages}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                            />
                        </ScrollIntoViewAnimationWrapper>
                    )}
                    <Styled.FilmsFilterContainer ref={ref} $animationDelay={0} $inView={inView}>
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
                    {inView &&
                        filmsToDisplay.map((film, index) => (
                            <ScrollIntoViewAnimationWrapper
                                $inView={inView}
                                $animationDelay={(index + 2) * delayPerItem}
                                $axis="Y"
                                $direction={1}
                                key={index}
                            >
                                <FilmContainerLarge film={film} />
                            </ScrollIntoViewAnimationWrapper>
                        ))}
                </Styled.FilmsContainer>
                <ScrollIntoViewAnimationWrapper
                    $inView={inView}
                    $axis="Y"
                    $direction={1}
                    $animationDelay={(filmsToDisplay.length + 2) * delayPerItem}
                >
                    <PaginationControl
                        numberOfPages={numberOfPages}
                        handlePageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </ScrollIntoViewAnimationWrapper>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
