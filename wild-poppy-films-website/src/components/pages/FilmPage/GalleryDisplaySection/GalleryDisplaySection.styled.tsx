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
