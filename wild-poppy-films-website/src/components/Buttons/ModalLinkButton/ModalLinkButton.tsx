import * as Styled from "./ModalLinkButton.styled";

export default function ModalLinkButton({ label, link }: { label: string; link: string }) {
    return (
        <Styled.Container href={link}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.RightFwdIconStyled />
        </Styled.Container>
    );
}
