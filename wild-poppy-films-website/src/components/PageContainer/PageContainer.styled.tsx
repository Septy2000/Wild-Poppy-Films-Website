import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: ${({ theme }) => theme.screen.mobile}) {
        display: grid;
        grid-template-columns: repeat() (4, 1fr);
        gap: 16px;
        margin: 0 20px;
    }
    @media (max-width: ${({ theme }) => theme.screen.tablet}) {
        display: grid;
        grid-template-columns: repeat() (6, 1fr);
        gap: 20px;
        margin: 0 40px;
    }
    @media (max-width: ${({ theme }) => theme.screen.desktop}) {
        display: grid;
        grid-template-columns: repeat() (6, 1fr);
        gap: 28px;
        margin: 0 64px;
    }
`;
