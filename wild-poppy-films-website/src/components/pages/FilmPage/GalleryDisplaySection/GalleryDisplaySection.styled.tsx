import styled from "styled-components";
import { generateSlideAnimation } from "@/utils/animationUtils";

export const Container = styled.div`
    overflow: hidden;
    padding: 3rem 0;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const AnimationWrapper = styled.div<{ $animationDelay: number; $inView: boolean }>`
    opacity: 0;
    ${({ $animationDelay, $inView }) => $inView && generateSlideAnimation("Y", 1, $animationDelay)}
`;

/**
 * The mobile and desktop galleries are both rendered and swapped by media query
 * rather than by a JS width check. A JS check only resolves after hydration, which
 * made desktop visitors briefly see the mobile carousel before it was replaced.
 */
export const MobileOnly = styled.div`
    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
`;

export const DesktopOnly = styled.div`
    display: none;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: block;
    }
`;
