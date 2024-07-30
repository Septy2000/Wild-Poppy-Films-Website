import styled from "styled-components";
import LeftForwardIcon from "@/icons/navigation/left-fwd-icon.svg";

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
    color: ${({ theme }) => theme.colors.neutral_shaded.neutral_2};
`;

export const LeftForwardIconStyled = styled(LeftForwardIcon)`
    path {
        fill: ${({ theme }) => theme.colors.neutral_shaded.neutral_2};
    }
`;
