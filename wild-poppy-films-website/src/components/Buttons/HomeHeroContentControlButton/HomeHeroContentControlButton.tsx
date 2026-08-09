import * as Styled from "./HomeHeroContentControlButton.styled";
import { resetScrollPosition } from "@/utils/windowFunctions";

export default function HomeHeroContentControlButton({
    onClick,
    direction,
}: {
    onClick: () => void;
    direction: "left" | "right";
}) {
    function handleOnClick() {
        resetScrollPosition();
        onClick();
    }

    return (
        <Styled.Container
            type="button"
            onClick={handleOnClick}
            aria-label={direction === "left" ? "Previous film" : "Next film"}
        >
            {direction === "left" ? (
                <Styled.LeftArrowIcon aria-hidden="true" />
            ) : (
                <Styled.RightArrowIcon aria-hidden="true" />
            )}
        </Styled.Container>
    );
}
