import * as Styled from "./SecondaryButton.styled";
import { SecondaryButtonProps } from "@/_types/components";
export default function SecondaryButton({
    label,
    variant = "green",
    onClick,
}: SecondaryButtonProps) {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Text $variant={variant}>{label}</Styled.Text>
            <Styled.SimpleArrowRightStyled $variant={variant} />
        </Styled.Container>
    );
}
