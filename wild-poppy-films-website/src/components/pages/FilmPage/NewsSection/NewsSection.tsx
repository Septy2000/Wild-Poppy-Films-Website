import { News } from "@/_types/common";
import * as Styled from "./NewsSection.styled";
import FilmNewsContainer from "@/components/pages/FilmPage/NewsSection/FilmNewsContainer/FilmNewsContainer";
import { useInView } from "react-intersection-observer";

export default function NewsSection({ shownNews }: { shownNews: News[] }) {
    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <Styled.Container ref={ref}>
            <Styled.Title>POPPYING UP IN THE NEWS!</Styled.Title>
            <Styled.NewsContainer>
                {shownNews.map((news, index) => (
                    <FilmNewsContainer
                        key={index}
                        news={news}
                        animationDelay={(index + 1) * delayPerItem}
                        inView={inView}
                    />
                ))}
            </Styled.NewsContainer>
        </Styled.Container>
    );
}
