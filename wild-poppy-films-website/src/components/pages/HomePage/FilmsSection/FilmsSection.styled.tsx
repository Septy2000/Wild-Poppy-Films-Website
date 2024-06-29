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
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        background-image: url(${HomePageFilmsBackgroundTablet.src});
    }
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        background-image: url(${HomePageFilmsBackgroundDesktop.src});
    }
`;

export const FilmsContainer = styled.div`
    padding: 48px 20px 16px 20px;
`;
