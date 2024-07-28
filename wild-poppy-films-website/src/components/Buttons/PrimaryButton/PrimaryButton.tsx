import { PrimaryButtonProps } from "@/_types/components";
import * as Styled from "./PrimaryButton.styled";

export default function PrimaryButton({
    children,
    href,
    variant = "red",
    animated = false,
    axis = "X",
    direction = 1,
    delay = 0,
    inView = true,
}: PrimaryButtonProps) {
    return (
        <Styled.Container
            href={href}
            $animated={animated}
            $axis={axis}
            $direction={direction}
            $delay={delay}
            $variant={variant}
            $inView={inView}
        >
            <Styled.Text $variant={variant}>{children}</Styled.Text>
            <Styled.StyledRightArrowIcon $variant={variant} />
        </Styled.Container>
    );
}
