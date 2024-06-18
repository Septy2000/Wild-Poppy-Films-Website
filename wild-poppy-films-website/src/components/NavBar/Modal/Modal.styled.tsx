import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
`;

export const Container = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    transition: transform 0.5s ease-in-out;
    z-index: 9999;

    padding: 20px 48px;
    width: 100%;
    height: 100%;
    top: 60px;
    transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        width: 50%;
        top: 96px;
        transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 48px 60px 48px 20px;
        width: 25%;
        top: 112px;
        transform: ${({ $isVisible }) => ($isVisible ? "translateX(0)" : "translateX(100%)")};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const SocialItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const MenuItem = styled.p`
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.neutral.neutral_1};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

export const SocialIcon = styled.img`
    margin: 0 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
