import * as Styled from "./ReturnButton.styled";

export default function ReturnButton({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.LeftForwardIconStyled />
            <Styled.Text>{text}</Styled.Text>
        </Styled.Container>
    );
}
