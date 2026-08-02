import * as Styled from "./GalleryDisplaySection.styled";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import ImagesShowcaseDesktop from "@/components/ImagesShowcaseDesktop/ImagesShowcaseDesktop";
import { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function GalleryDisplaySection({
    gallery,
    filmTitle,
}: {
    gallery: StaticImageData[];
    filmTitle: string;
}) {
    const delayPerItem = 0.1;

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <Styled.Container ref={ref}>
            <ScrollIntoViewAnimationWrapper
                $inView={inView}
                $animationDelay={delayPerItem}
                $axis="Y"
                $direction={1}
            >
                <Styled.MobileOnly>
                    <ImageCarousel images={gallery} filmTitle={filmTitle} />
                </Styled.MobileOnly>
                <Styled.DesktopOnly>
                    <ImagesShowcaseDesktop images={gallery} filmTitle={filmTitle} />
                </Styled.DesktopOnly>
            </ScrollIntoViewAnimationWrapper>
        </Styled.Container>
    );
}
