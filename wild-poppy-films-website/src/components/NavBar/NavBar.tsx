"use client";
import React, { useState } from "react";
import * as Styled from "./NavBar.styled";
import { NavBarWildPoppyIcon, NavBarCloseIcon, NavBarExpandIcon } from "../Icons/Icons.styled";
import { navbar_menu_close_src, navbar_menu_expand_src, wpf_navbar_icon_src } from "../Icons/Icons";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Gotta move isMenuOpen to the whole navbar as a param
        <Styled.Header>
            <NavBarWildPoppyIcon
                src={wpf_navbar_icon_src}
                alt="Wild Poppy Films logo"
                width={96}
                height={35}
                priority
                $isMenuOpen={isMenuOpen}
            />
            <Styled.MenuRhsContainer>
                <Styled.MenuText $isMenuOpen={isMenuOpen}>MENU</Styled.MenuText>
                {isMenuOpen ? (
                    <NavBarCloseIcon
                        src={navbar_menu_close_src}
                        alt="Close Menu"
                        width={35}
                        height={35}
                        priority
                        $isMenuOpen={isMenuOpen}
                    />
                ) : (
                    <NavBarExpandIcon
                        src={navbar_menu_expand_src}
                        alt="Open Menu"
                        width={35}
                        height={35}
                        priority
                        $isMenuOpen={isMenuOpen}
                    />
                )}
            </Styled.MenuRhsContainer>
        </Styled.Header>
    );
}
