"use client";
import styled from "styled-components";
import HomePageFilmsBackgroundMobile from "@/images/home-page/films/home-films-background-mobile.png";
import HomePageFilmsBackgroundTablet from "@/images/home-page/films/home-films-background-tablet.png";
import HomePageFilmsBackgroundDesktop from "@/images/home-page/films/home-films-background-desktop.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${HomePageFilmsBackgroundMobile.src});

    padding: 3rem 1.5rem;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        background-image: url(${HomePageFilmsBackgroundTablet.src});
    }
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background-image: url(${HomePageFilmsBackgroundDesktop.src});
        padding: 7.5rem 8rem;
    }
`;

export const FilmsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        gap: 4rem;
        margin-bottom: 4rem;
    }
`;
