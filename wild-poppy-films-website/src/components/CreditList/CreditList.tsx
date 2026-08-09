import React from "react";

type TextComponent = React.ComponentType<{ children: React.ReactNode }>;

/**
 * Renders a credit line such as `PROD. BY DARIA POPESCO & DELIA DUMONT`, with the
 * names styled differently from the label and separators.
 *
 * The label/name components are passed in because each card scopes its own styled
 * text. Rendering the names array directly as a JSX child would concatenate them
 * with no separator - see also formatCredits in utils/formatters.
 */
export default function CreditList({
    label,
    names,
    LabelText,
    NameText,
}: {
    label: string;
    names: string[] | undefined;
    LabelText: TextComponent;
    NameText: TextComponent;
}) {
    if (!names?.length) return null;

    return (
        <React.Fragment>
            <LabelText>{label}</LabelText>
            {names.map((name, index) => (
                <React.Fragment key={name}>
                    <NameText>{name}</NameText>
                    {index < names.length - 1 && <LabelText>{" & "}</LabelText>}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}
