"use client";
import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./NavBar.styled";
import Modal from "./Modal/Modal";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isOverContent, setIsOverContent] = useState(true);
    const lastScrollY = useRef(0);

    const homeHeroViewHeight = 0.85;
    const filmHeroViewHeight = 0.5;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        // Check if the user is over content
        if (
            (currentScrollY < homeHeroViewHeight * window.innerHeight && pathname === "/") ||
            (currentScrollY < filmHeroViewHeight * window.innerHeight &&
                pathname.startsWith("/films/"))
        ) {
            setIsOverContent(true);
        } else {
            setIsOverContent(false);
        }

        lastScrollY.current = currentScrollY;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const ModalToggleIcon = isModalOpen ? Styled.MenuCloseIcon : Styled.MenuOpenIcon;

    return (
        <React.Fragment>
            <Styled.Header
                $isModalOpen={isModalOpen}
                $isHidden={isHidden}
                $isOverContent={isOverContent}
            >
                <Styled.WildPoppyAltXsLogo
                    onClick={() => {
                        router.push("/");
                        setIsModalOpen(false);
                    }}
                />
                <Styled.WildPoppyAltXlLogo
                    onClick={() => {
                        router.push("/");
                        setIsModalOpen(false);
                    }}
                />
                <Styled.MenuRhsContainer onClick={toggleModal}>
                    <Styled.MenuText>{isModalOpen ? "CLOSE" : "MENU"}</Styled.MenuText>
                    <ModalToggleIcon />
                </Styled.MenuRhsContainer>
            </Styled.Header>
            <Modal isVisible={isModalOpen} onClose={toggleModal} />
        </React.Fragment>
    );
}
