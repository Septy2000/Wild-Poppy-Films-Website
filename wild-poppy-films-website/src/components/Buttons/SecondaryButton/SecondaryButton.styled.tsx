import styled from "styled-components";
import SimpleArrowRight from "@/icons/navigation/simple-arrow-right.svg";
import { SecondaryButtonVariant } from "@/_types/styledComponents";

// Rendered as either <button> or <a> depending on whether an href is given, so it
// has to neutralise both sets of user-agent styles - the button border/font and the
// link underline/colour - to keep looking identical to when this was a <div>.
export const Container = styled.div`
    border: none;
    font: inherit;
    color: inherit;
    text-decoration: none;
    text-align: left;
    cursor: pointer;

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
