import FilmContainerLarge from "@/components/pages/FilmsPage/FilmContainerLarge/FilmContainerLarge";
import * as Styled from "./FilmsPage.styled";
import { films } from "@/data";
export function FilmsPage() {
    return (
        <Styled.Container>
            <Styled.FilmsContainer>
                {films.map((film, index) => (
                    <FilmContainerLarge key={index} film={film} />
                ))}
            </Styled.FilmsContainer>
        </Styled.Container>
    );
}
