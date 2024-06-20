"use client";
import React, { useState, useEffect } from "react";
import * as Styled from "./NavBar.styled";
import Modal from "./Modal/Modal";

export default function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        if (currentScrollY < 50) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <React.Fragment>
            <Styled.Header
                $isModalOpen={isModalOpen}
                $isHidden={isHidden}
                $isTransparent={isTransparent}
            >
                <Styled.WildPoppyAltXsLogo />
                <Styled.WildPoppyAltXlLogo />
                <Styled.MenuRhsContainer onClick={toggleModal}>
                    <Styled.MenuText>{isModalOpen ? "CLOSE" : "MENU"}</Styled.MenuText>
                    {isModalOpen ? <Styled.MenuCloseIcon /> : <Styled.MenuOpenIcon />}
                </Styled.MenuRhsContainer>
            </Styled.Header>
            <Modal isVisible={isModalOpen} onClose={toggleModal} />
        </React.Fragment>
    );
}
