"use client";
import React, { useEffect } from "react";
import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";
import { useSearchParams, useRouter } from "next/navigation";
import { FilterOptions } from "@/_types/common";
import { useInView } from "react-intersection-observer";
import PaginationControl from "@/components/PaginationControl/PaginationControl";
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


    const searchParams = useSearchParams();
    const router = useRouter();

    const filmsPerPage = 3;
    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // An unrecognised ?filter= value falls back to "all" rather than showing nothing
    const requestedFilter = searchParams.get("filter");
    const filter: FilterOptions = filters.some((f) => f.status === requestedFilter)
        ? (requestedFilter as FilterOptions)
        : "all";

    const filteredFilms = films.filter((film) => {
        switch (filter) {
            case "all":
                return true;
            case "available":
                return film.status === "available";
            case "coming_soon":
                return film.status === "coming_soon" || film.status === "in_production";
        }
    });

    const numberOfPages = Math.max(1, Math.ceil(filteredFilms.length / filmsPerPage));

    // parseInt returns NaN for a non-numeric ?page=, which would silently break the slice
    const requestedPage = parseInt(searchParams.get("page") ?? "1", 10);
    const currentPage = Number.isNaN(requestedPage)
        ? 1
        : Math.min(Math.max(requestedPage, 1), numberOfPages);

    const startIndex = (currentPage - 1) * filmsPerPage;
    const filmsToDisplay = filteredFilms.slice(startIndex, startIndex + filmsPerPage);

    // Tidy the URL when it asked for a page or filter that doesn't exist. `replace`
    // rather than `push` so this normalisation doesn't end up in the back history.
    useEffect(() => {
        if (requestedPage !== currentPage || requestedFilter !== filter) {
            router.replace(`/films?page=${currentPage}&filter=${filter}`);
        }
    }, [requestedPage, currentPage, requestedFilter, filter, router]);

    const handlePageChange = (toPage: number) => {
        if (toPage < 1 || toPage > numberOfPages || toPage === currentPage) return;

        router.push(`/films?page=${toPage}&filter=${filter}`);
    };

    const handleFilterChange = (toFilter: FilterOptions) => {
        router.push(`/films?page=1&filter=${toFilter}`);
    };

    // The page shell and TitleBuffer live in app/films/page.tsx, outside the Suspense
    // boundary this component sits behind - otherwise the heading would be missing
    // from the server-rendered HTML, since useSearchParams forces client rendering.
    return (
        <React.Fragment>
            <Styled.Container>
                <Styled.TopFilmsPageControlsContainer>
                    <Styled.DesktopOnlyPagination>
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
                    </Styled.DesktopOnlyPagination>
                    <Styled.FilmsFilterContainer ref={ref} $animationDelay={0} $inView={inView}>
                        {filters.map((filterOption, index) => (
                            <Styled.FilmsFilter
                                key={filterOption.status}
                                type="button"
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
                                key={film.slug}
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
        </React.Fragment>
    );
}
