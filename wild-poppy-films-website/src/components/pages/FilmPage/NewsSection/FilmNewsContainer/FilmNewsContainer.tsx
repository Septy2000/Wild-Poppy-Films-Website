import { News } from "@/_types/common";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import * as Styled from "./FilmNewsContainer.styled";
import { useRouter } from "next/navigation";
export default function FilmNewsContainer({
    news,
    animationDelay = 0,
    inView = true,
}: {
    news: News;
    animationDelay?: number;
    inView?: boolean;
}) {
    const router = useRouter();

    return (
        <Styled.Container $animationDelay={animationDelay} $inView={inView}>
            <Styled.ImageStyled
                width={300}
                height={300}
                priority
                src={news.cover.src}
                alt={`news-cover`}
            />
            <Styled.Content>{news.content}</Styled.Content>
            <SecondaryButton
                label={"Read on Vanity Fair"}
                variant="blue"
                onClick={() => router.push(news.hyperlink)}
            />
        </Styled.Container>
    );
}
