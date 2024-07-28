// animationUtils.ts
import { keyframes, css } from "styled-components";

// Utility function to generate keyframes for sliding animation
const generateSlideKeyframes = (axis: "X" | "Y", direction: 1 | -1) => keyframes`
  from {
    transform: translate${axis}(${direction * 300}%);
  }
  to {
    transform: translate${direction}(0);
    opacity: 1;
  }
`;

// Utility function to generate animation CSS
export const generateSlideAnimation = (
    axis: "X" | "Y",
    direction: 1 | -1,
    delay: number,
    duration: number = 0.2,
    easing: string = "ease-in-out"
) => css`
    opacity: 0;
    animation: ${generateSlideKeyframes(axis, direction)} ${duration}s ${easing} forwards;
    animation-delay: ${delay}s;
`;
