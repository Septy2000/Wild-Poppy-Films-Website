"use client";
import styled from "styled-components";
import HomePageFilmsBackgroundMobile from "@/images/home-page/films/home-films-background-mobile.png";
import HomePageFilmsBackgroundTablet from "@/images/home-page/films/home-films-background-tablet.png";
import HomePageFilmsBackgroundDesktop from "@/images/home-page/films/home-films-background-desktop.png";

export const Container = styled.div`
    padding-top: ${({ theme }) => theme.navbar_height.mobile};
    padding-bottom: 7.5rem;

    background-image: url(${HomePageFilmsBackgroundMobile.src});

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding-top: ${({ theme }) => theme.navbar_height.tablet};
        background-image: url(${HomePageFilmsBackgroundTablet.src});
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding-top: ${({ theme }) => theme.navbar_height.desktop};
        background-image: url(${HomePageFilmsBackgroundDesktop.src});
    }
`;

export const MembersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 0 2rem 0;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 4rem;
        justify-content: center;
        align-items: center;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        justify-content: center;
    }
`;
