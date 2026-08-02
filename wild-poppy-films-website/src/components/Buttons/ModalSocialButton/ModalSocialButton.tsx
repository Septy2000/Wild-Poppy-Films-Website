import * as Styled from "./ModalSocialButton.styled";

export default function ModalSocialButton({
    link,
    icon,
    label,
}: {
    link: string;
    icon: React.ReactNode;
    /** Full accessible name, e.g. "Wild Poppy Films on Instagram". */
    label: string;
}) {
    return (
        // The link's only content is an SVG, so without aria-label a screen reader
        // announces it as an unlabelled link. These all point off-site, hence
        // target/rel.
        <Styled.Container
            href={link}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Styled.Container>
    );
}
