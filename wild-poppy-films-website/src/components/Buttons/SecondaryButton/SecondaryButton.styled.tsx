import styled from "styled-components";
import SimpleArrowRight from "@/icons/navigation/simple-arrow-right.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0.5rem 1rem;
    gap: 1rem;
    background-color: transparent;
`;

export const Text = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;

export const SimpleArrowRightStyled = styled(SimpleArrowRight)`
    path {
        fill: ${({ theme }) => theme.colors.secondary.core_green_light_2};
    }
`;
