import * as Styled from "./SecondaryButton.styled";
import { SecondaryButtonVariant } from "@/_types/styledComponents";
export default function SecondaryButton({
    text,
    variant = "green",
    onClick,
}: {
    text: string;
    variant?: SecondaryButtonVariant;
    onClick: () => void;
}) {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Text $variant={variant}>{text}</Styled.Text>
            <Styled.SimpleArrowRightStyled $variant={variant} />
        </Styled.Container>
    );
}
