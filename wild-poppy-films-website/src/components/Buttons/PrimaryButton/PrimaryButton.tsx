import Link from "next/link";
import { PrimaryButtonProps } from "@/_types/components";
import * as Styled from "./PrimaryButton.styled";

/**
 * Pass `href` when the control navigates and it renders as a real link - focusable,
 * openable in a new tab, and followable by crawlers. Without `href` it stays a
 * <button> for genuine actions such as submitting the contact form.
 */
export default function PrimaryButton({
    label,
    onClick = () => {},
    variant = "red",
    type = "button",
    disabled = false,
    href,
}: PrimaryButtonProps) {
    const content = (
        <>
            <Styled.Text $variant={variant}>{label}</Styled.Text>
            <Styled.StyledRightArrowIcon $variant={variant} aria-hidden="true" />
        </>
    );

    if (href) {
        return (
            <Styled.Container as={Link} href={href} onClick={onClick}>
                {content}
            </Styled.Container>
        );
    }

    return (
        <Styled.Container onClick={onClick} type={type} disabled={disabled}>
            {content}
        </Styled.Container>
    );
}
