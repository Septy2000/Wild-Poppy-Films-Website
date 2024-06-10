"use client";
import styled from "styled-components";
import Image from "next/image";

const NavBarIcon = styled(Image)<{ $isMenuOpen: boolean }>`
    color: ${({ $isMenuOpen, theme }) =>
        $isMenuOpen ? theme.colors.neutral.neutral_1 : theme.colors.shaded.core_green_light_2};
`;
export const NavBarWildPoppyIcon = styled(NavBarIcon)`
    width: 96px;
    height: 35px;
`;

export const NavBarExpandIcon = styled(NavBarIcon)`
    width: 35px;
    height: 35px;
`;

export const NavBarCloseIcon = styled(NavBarIcon)`
    width: 35px;
    height: 35px;
`;
