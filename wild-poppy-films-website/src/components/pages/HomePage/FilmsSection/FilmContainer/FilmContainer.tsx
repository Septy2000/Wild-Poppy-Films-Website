"use client";
import React from "react";
import * as Styled from "./FilmContainer.styled";
import { Film } from "@/_types/common";
import CreditList from "@/components/CreditList/CreditList";

export default function FilmContainer({ film }: { film: Film }) {
    return (
        <Styled.Container href={`/films/${film.slug}`}>
            {/* 96px on mobile, 280px on desktop - see FilmContainer.styled */}
            <Styled.FilmImage
                src={film.cover_small}
                alt={`${film.title} poster`}
                sizes="(min-width: 1200px) 280px, 96px"
                placeholder="blur"
            />
            <Styled.FilmInfoContainer>
                <Styled.FilmTitleAndYearContainer>
                    <Styled.FilmTitle>{film.title}</Styled.FilmTitle>
                    <Styled.FilmYear>{film.release_year}</Styled.FilmYear>
                </Styled.FilmTitleAndYearContainer>
                <Styled.FilmDescriptionContainer>
                    <Styled.DefaultText>{film.genre}</Styled.DefaultText>
                    <Styled.FilmProductionContainer>
                        <CreditList
                            label="PROD. BY "
                            names={film.production.producer}
                            LabelText={Styled.DefaultText}
                            NameText={Styled.ProductionText}
                        />
                    </Styled.FilmProductionContainer>
                </Styled.FilmDescriptionContainer>
            </Styled.FilmInfoContainer>
            <Styled.BackArrowIconStyled />
        </Styled.Container>
    );
}
