import styled from "styled-components";
import RightArrowIcon from "@/icons/navigation/right-fwd-icon.svg";
import { PrimaryButtonColorVariant } from "@/_types/styledComponents";

export const Container = styled.button`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    // mobile
    width: 128px;
    padding: 12px 8px;
    background-color: transparent;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 200px;
        padding: 16px 8px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.secondary.core_green_light_2};

        &:hover {
            background-color: ${({ theme }) => theme.colors.neutral.neutral_14};
        }
    }
`;

export const Text = styled.p<{ $variant: PrimaryButtonColorVariant }>`
    // mobile
    font-size: 16px;

    color: ${({ theme, $variant }) =>
        $variant === "red"
            ? theme.colors.primary.poppy_red
            : theme.colors.secondary.core_green_light_2};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.neutral.neutral_14};

        ${Container}:hover & {
            color: ${({ theme }) => theme.colors.primary.poppy_red};
        }
    }
`;

export const StyledRightArrowIcon = styled(RightArrowIcon)<{ $variant: PrimaryButtonColorVariant }>`
    margin-left: 8px;

    // mobile
    path {
        fill: ${({ theme, $variant }) =>
            $variant === "red"
                ? theme.colors.primary.poppy_red
                : theme.colors.secondary.core_green_light_2};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        path {
            fill: ${({ theme }) => theme.colors.neutral.neutral_14};
        }

        ${Container}:hover & {
            path {
                fill: ${({ theme }) => theme.colors.primary.poppy_red};
            }
        }
    }
`;
