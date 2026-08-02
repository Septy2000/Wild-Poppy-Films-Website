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

    useEffect(() => {
        let frame: number | null = null;

        function update() {
            frame = null;
            const currentScrollY = window.scrollY;

            setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 100);

            // Check if the user is over content
            setIsOverContent(
                (currentScrollY < homeHeroViewHeight * window.innerHeight && pathname === "/") ||
                    (currentScrollY < filmHeroViewHeight * window.innerHeight &&
                        pathname.startsWith("/films/"))
            );

            lastScrollY.current = currentScrollY;
        }

        // Scroll fires far more often than the screen refreshes. Coalescing into one
        // rAF callback means at most one state update per frame instead of per event,
        // and `passive` tells the browser this listener will never preventDefault, so
        // it can keep scrolling smoothly without waiting on us.
        function onScroll() {
            if (frame === null) frame = requestAnimationFrame(update);
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [pathname]);

    const toggleModal = () => setIsModalOpen((open) => !open);
    const closeModal = () => setIsModalOpen(false);

    // Ties the menu button's aria-controls to the panel it opens.
    const modalId = "main-navigation-menu";

    const ModalToggleIcon = isModalOpen ? Styled.MenuCloseIcon : Styled.MenuOpenIcon;

    return (
        <React.Fragment>
            <Styled.Header
                $isModalOpen={isModalOpen}
                $isHidden={isHidden}
                $isOverContent={isOverContent}
            >
                <Styled.LogoLink
                    href="/"
                    aria-label="Wild Poppy Films - home"
                    onClick={() => setIsModalOpen(false)}
                >
                    <Styled.WildPoppyAltXsLogo />
                    <Styled.WildPoppyAltXlLogo />
                </Styled.LogoLink>
                <Styled.MenuRhsContainer
                    type="button"
                    onClick={toggleModal}
                    aria-expanded={isModalOpen}
                    aria-controls={modalId}
                    aria-label={isModalOpen ? "Close menu" : "Open menu"}
                >
                    <Styled.MenuText>{isModalOpen ? "CLOSE" : "MENU"}</Styled.MenuText>
                    <ModalToggleIcon aria-hidden="true" />
                </Styled.MenuRhsContainer>
            </Styled.Header>
            <Modal id={modalId} isVisible={isModalOpen} onClose={closeModal} />
        </React.Fragment>
    );
}
