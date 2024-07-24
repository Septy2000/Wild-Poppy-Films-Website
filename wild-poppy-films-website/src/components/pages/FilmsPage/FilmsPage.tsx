"use client";
import React, { useState, useEffect } from "react";
import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";

type FilterOptions = "all" | "available" | "coming_soon";

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

    useEffect(() => {
        console.log(selectedFilmFilter);
    }, [selectedFilmFilter]);

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

    return (
        <Styled.Container>
            <div style={{ height: "100px" }}></div>
            <Styled.FilmsFilterContainer>
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
            <Styled.FilmsContainer>
                {filteredFilms.map((film, index) => (
                    <FilmContainerLarge key={index} film={film} />
                ))}
            </Styled.FilmsContainer>
        </Styled.Container>
    );
}
