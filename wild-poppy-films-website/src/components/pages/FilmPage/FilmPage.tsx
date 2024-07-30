"use client";
import { Film } from "@/_types/common";
import { useRouter } from "next/navigation";
import * as Styled from "./FilmPage.styled";
import React, { useState, useEffect } from "react";

export default function FilmPage({ film }: { film: Film }) {
    const router = useRouter();

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.GlassOverFrameStyled />
                <Styled.ImageStyled
                    width={300}
                    height={300}
                    priority
                    src={film.cover.src}
                    alt={`${film.title}-cover`}
                />
            </Styled.ImageContainer>
            <Styled.DescriptionContainer>
                <Styled.DescriptionText>{film.description}</Styled.DescriptionText>
            </Styled.DescriptionContainer>
        </Styled.Container>
    );
}
