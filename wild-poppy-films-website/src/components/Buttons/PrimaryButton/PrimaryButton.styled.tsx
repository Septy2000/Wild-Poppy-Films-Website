import styled from "styled-components";
import RightArrowIcon from "@/icons/navigation/right-fwd-icon.svg";
import Link from "next/link";

export const Container = styled(Link)`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    // mobile
    width: 128px;
    /* height: 40px; */
    padding: 12px 8px;
    background-color: transparent;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 200px;
        /* height: 52px; */
        padding: 16px 8px;
        background-color: ${({ theme }) => theme.colors.secondary.core_green_light_2};

        &:hover {
            background-color: ${({ theme }) => theme.colors.neutral.neutral_14};
        }
    }
`;

export const Text = styled.p`
    // mobile
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.poppy_red};

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.neutral.neutral_14};

        &:hover {
            color: ${({ theme }) => theme.colors.primary.poppy_red};
        }
    }
`;

export const StyledRightArrowIcon = styled(RightArrowIcon)`
    margin-left: 8px;

    // mobile
    path {
        fill: ${({ theme }) => theme.colors.primary.poppy_red};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        path {
            fill: ${({ theme }) => theme.colors.neutral.neutral_14};
        }

        &:hover {
            path {
                fill: ${({ theme }) => theme.colors.primary.poppy_red};
            }
        }
    }
`;
