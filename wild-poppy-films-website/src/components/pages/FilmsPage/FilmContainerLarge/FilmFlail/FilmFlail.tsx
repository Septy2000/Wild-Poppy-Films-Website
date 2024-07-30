import React from "react";
import * as Styled from "./FilmFlail.styled";
import { FilmStatus } from "@/_types/common";

export default function FilmFlail({ filmStatus }: { filmStatus: FilmStatus }) {
    return (
        <Styled.Container>
            <Styled.Text>{filmStatus.replace(/_/g, " ").toUpperCase()}</Styled.Text>
        </Styled.Container>
    );
}
