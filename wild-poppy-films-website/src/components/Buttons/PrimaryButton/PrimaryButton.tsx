import * as Styled from "./PrimaryButton.styled";
import { PrimaryButtonColorVariant } from "@/_types/styledComponents";

export default function PrimaryButton({
    children,
    href,
    variant = "red",
}: {
    children: string;
    href: string;
    variant: PrimaryButtonColorVariant;
}) {
    return (
        <Styled.Container href={href}>
            <Styled.Text $variant={variant}>{children}</Styled.Text>
            <Styled.StyledRightArrowIcon $variant={variant} />
        </Styled.Container>
    );
}
