import * as Styled from "./GalleryDisplaySection.styled";
import useIsMobile from "@/hooks/useIsMobile";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import ImagesShowcaseDesktop from "@/components/ImagesShowcaseDesktop/ImagesShowcaseDesktop";
import { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function GalleryDisplaySection({ gallery }: { gallery: StaticImageData[] }) {
    const isMobile = useIsMobile();

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
                {isMobile && <ImageCarousel images={gallery} />}
                {!isMobile && <ImagesShowcaseDesktop images={gallery} />}
            </ScrollIntoViewAnimationWrapper>
        </Styled.Container>
    );
}
