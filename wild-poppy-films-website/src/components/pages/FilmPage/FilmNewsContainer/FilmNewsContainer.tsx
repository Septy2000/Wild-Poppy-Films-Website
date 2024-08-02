import { News } from "@/_types/common";
import SecondaryButton from "@/components/Buttons/SecondaryButton/SecondaryButton";
import * as Styled from "./FilmNewsContainer.styled";
import { useRouter } from "next/navigation";
export default function FilmNewsContainer({ news }: { news: News }) {
    const router = useRouter();

    return (
        <Styled.Container>
            <Styled.ImageStyled
                width={300}
                height={300}
                priority
                src={news.cover.src}
                alt={`news-cover`}
            />
            <Styled.Content>{news.content}</Styled.Content>
            <SecondaryButton
                text={"Read on Vanity Fair"}
                onClick={() => router.push(news.hyperlink)}
            />
        </Styled.Container>
    );
}
