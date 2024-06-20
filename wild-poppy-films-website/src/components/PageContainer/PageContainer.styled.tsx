import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 0 20px;
    @media (min-width: ${({ theme }) => theme.screen.tablet}) /* (max-width: ${({ theme }) =>
            theme.screen.desktop}) { */ {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        margin: 0 40px;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 28px;
        margin: 0 64spx;
    }
`;
