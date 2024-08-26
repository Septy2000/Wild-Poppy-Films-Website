import { PrimaryButtonProps } from "@/_types/components";
import * as Styled from "./PrimaryButton.styled";

export default function PrimaryButton({
    label,
    onClick = () => {},
    variant = "red",
    type = "button",
}: PrimaryButtonProps) {
    return (
        <Styled.Container onClick={onClick} type={type}>
            <Styled.Text $variant={variant}>{label}</Styled.Text>
            <Styled.StyledRightArrowIcon $variant={variant} />
        </Styled.Container>
    );
}
