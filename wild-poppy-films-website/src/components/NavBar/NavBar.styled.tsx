import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    @media (min-width: ${({ theme }) => theme.screen.medium}) {
        height: 112px;
    }
    padding: 0 64px;
`;

export const MenuRhsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuText = styled.p<{ $isMenuOpen: boolean }>`
    color: ${({ $isMenuOpen, theme }) =>
        $isMenuOpen ? theme.colors.neutral.core_green_light_2 : theme.colors.neutral.neutral_1};
    margin-right: 16px;
`;
