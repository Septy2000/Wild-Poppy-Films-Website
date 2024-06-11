"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./NavBar.styled";
import WildPoppyAltXlLogo from "@/icons/logo/wp-logo-alt-xl.svg";
import MenuOpenIcon from "@/icons/navigation/menu-icon-open-mobile.svg";
import MenuCloseIcon from "@/icons/navigation/menu-icon-close-mobile.svg";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        console.log(isMenuOpen);
    }, [isMenuOpen]);

    return (
        // Gotta move isMenuOpen to the whole navbar as a param
        <Styled.Header $isMenuOpen={isMenuOpen}>
            <WildPoppyAltXlLogo />
            <Styled.MenuRhsContainer>
                <Styled.MenuText>{isMenuOpen ? "CLOSE" : "MENU"}</Styled.MenuText>
                {isMenuOpen ? (
                    <MenuCloseIcon onClick={() => setIsMenuOpen(false)} />
                ) : (
                    <MenuOpenIcon onClick={() => setIsMenuOpen(true)} />
                )}
            </Styled.MenuRhsContainer>
        </Styled.Header>
    );
}
