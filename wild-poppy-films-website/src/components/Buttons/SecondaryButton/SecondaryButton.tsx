import * as Styled from "./SecondaryButton.styled";

export default function SecondaryButton({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Text>{text}</Styled.Text>
            <Styled.SimpleArrowRightStyled />
        </Styled.Container>
    );
}
