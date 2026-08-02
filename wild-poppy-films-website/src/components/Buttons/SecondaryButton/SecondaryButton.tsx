import Link from "next/link";
import * as Styled from "./SecondaryButton.styled";
import { SecondaryButtonProps } from "@/_types/components";

/**
 * Pass `href` to render a real link; `external` adds the target/rel pair for
 * off-site destinations such as YouTube.
 */
export default function SecondaryButton({
    label,
    variant = "green",
    onClick,
    href,
    external = false,
}: SecondaryButtonProps) {
    const content = (
        <>
            <Styled.Text $variant={variant}>{label}</Styled.Text>
            <Styled.SimpleArrowRightStyled $variant={variant} aria-hidden="true" />
        </>
    );

    if (href) {
        return (
            <Styled.Container
                as={Link}
                href={href}
                onClick={onClick}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {content}
            </Styled.Container>
        );
    }

    return (
        <Styled.Container as="button" type="button" onClick={onClick}>
            {content}
        </Styled.Container>
    );
}
