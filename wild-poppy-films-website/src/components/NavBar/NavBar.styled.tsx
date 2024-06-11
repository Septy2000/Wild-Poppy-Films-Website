import styled from "styled-components";

export const Header = styled.header<{ $isModalOpen: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};

    height: 60px;
    padding: 0 20px;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 0 40px;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 0 64px;
        height: 112px;
    }

    path {
        fill: ${({ $isModalOpen, theme }) =>
            $isModalOpen
                ? theme.colors.secondary.core_green_light_2
                : theme.colors.neutral.neutral_1};
    }

    p {
        color: ${({ $isModalOpen, theme }) =>
            $isModalOpen
                ? theme.colors.secondary.core_green_light_2
                : theme.colors.neutral.neutral_1};
    }
`;

export const MenuRhsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

export const MenuText = styled.p`
    margin-right: 16px;
`;
