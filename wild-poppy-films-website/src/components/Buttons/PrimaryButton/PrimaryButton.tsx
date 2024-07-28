import * as Styled from "./PrimaryButton.styled";
import { PrimaryButtonColorVariant } from "@/_types/styledComponents";
import { ParsedUrlQuery } from "querystring";

export default function PrimaryButton({
    children,
    href,
    variant = "red",
    
}: {
    children: string;
    href:
        | {
              pathname: string;
              query?: ParsedUrlQuery;
          }
        | string;
    variant: PrimaryButtonColorVariant;
}) {
    return (
        <Styled.Container href={href}>
            <Styled.Text $variant={variant}>{children}</Styled.Text>
            <Styled.StyledRightArrowIcon $variant={variant} />
        </Styled.Container>
    );
}
