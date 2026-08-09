"use client";
import * as Styled from "./PageLoading.styled";

export default function PageLoading() {
    return (
        <Styled.Container role="status" aria-label="Loading">
            <Styled.Petal />
        </Styled.Container>
    );
}
