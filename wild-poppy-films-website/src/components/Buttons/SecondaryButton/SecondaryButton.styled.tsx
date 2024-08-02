import styled from "styled-components";
import SimpleArrowRight from "@/icons/navigation/simple-arrow-right.svg";
import { SecondaryButtonVariant } from "@/_types/styledComponents";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0.5rem 1rem 0.5rem 0;
    gap: 1rem;
    background-color: transparent;
`;

export const Text = styled.p<{ $variant: SecondaryButtonVariant }>`
    font-size: 1rem;
    color: ${({ $variant, theme }) => {
        switch ($variant) {
            case "blue":
                return theme.colors.secondary.celadon_blue_dark_1;
            case "green":
                return theme.colors.secondary.core_green_light_2;
            default:
                return theme.colors.secondary.core_green_light_2;
        }
    }};
`;

export const SimpleArrowRightStyled = styled(SimpleArrowRight)<{
    $variant: SecondaryButtonVariant;
}>`
    path {
        fill: ${({ $variant, theme }) => {
            switch ($variant) {
                case "blue":
                    return theme.colors.secondary.celadon_blue_dark_1;
                case "green":
                    return theme.colors.secondary.core_green_light_2;
                default:
                    return theme.colors.secondary.core_green_light_2;
            }
        }};
    }
`;
