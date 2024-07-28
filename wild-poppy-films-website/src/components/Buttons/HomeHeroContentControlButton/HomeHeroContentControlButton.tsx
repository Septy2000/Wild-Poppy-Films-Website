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
        <Styled.Container onClick={handleOnClick}>
            {direction === "left" ? <Styled.LeftArrowIcon /> : <Styled.RightArrowIcon />}
        </Styled.Container>
    );
}
