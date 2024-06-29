import * as Styled from "./PrimaryButton.styled";

export default function PrimaryButton({ children, href }: { children: string; href: string }) {
    return (
        <Styled.Container href={href}>
            <Styled.Text>{children}</Styled.Text>
            <Styled.StyledRightArrowIcon />
        </Styled.Container>
    );
}
