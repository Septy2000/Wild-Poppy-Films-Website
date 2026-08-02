import * as Styled from "./ScrollDownArrowContainer.styled";
import React from "react";

/**
 * The scroll-down affordance under the hero. It previously took a forwarded ref that
 * it never attached to anything and only read from - the same ref object HomePage
 * also gave to FilmsSection. It now just takes the action to run.
 */
export default function ScrollDownArrowContainer({ onScrollTo }: { onScrollTo: () => void }) {
    return (
        <React.Fragment>
            <Styled.Container
                as="button"
                type="button"
                onClick={onScrollTo}
                aria-label="Scroll to films"
            >
                <Styled.StyledDownwardIcon aria-hidden="true" />
            </Styled.Container>
            <Styled.Spacer />
        </React.Fragment>
    );
}
