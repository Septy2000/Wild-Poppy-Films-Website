"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./NavBar.styled";
import WildPoppyAltXlLogo from "@/icons/logo/wp-logo-alt-xl.svg";
import MenuOpenIcon from "@/icons/navigation/menu-icon-open-mobile.svg";
import MenuCloseIcon from "@/icons/navigation/menu-icon-close-mobile.svg";
export default function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        // Gotta move isMenuOpen to the whole navbar as a param
        <Styled.Header $isModalOpen={isModalOpen}>
            <WildPoppyAltXlLogo />
            <Styled.MenuRhsContainer onClick={toggleModal}>
                <Styled.MenuText>{isModalOpen ? "CLOSE" : "MENU"}</Styled.MenuText>
                {isModalOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
            </Styled.MenuRhsContainer>
        </Styled.Header>
    );
}
