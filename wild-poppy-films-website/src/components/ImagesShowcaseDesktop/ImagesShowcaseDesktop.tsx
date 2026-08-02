// components/ImagesShowcaseDesktop.tsx
import React, { useState } from "react";
import * as Styled from "./ImagesShowcaseDesktop.styled";
import { StaticImageData } from "next/image";

export default function ImagesShowcaseDesktop({
    images,
    filmTitle,
}: {
    images: StaticImageData[];
    filmTitle: string;
}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // The grid is capped at 80rem with 4rem padding, so the large pane settles around
    // 560px and each thumbnail around 170px. Without `sizes` the browser assumed every
    // one of these filled the viewport and fetched the largest srcset entry for each.
    return (
        <Styled.FlexContainerWrapper>
            <Styled.Container>
                <Styled.SelectedImage
                    src={images[selectedImageIndex]}
                    alt={`${filmTitle} - still ${selectedImageIndex + 1} of ${images.length}`}
                    sizes="(min-width: 1400px) 560px, 45vw"
                    placeholder="blur"
                    loading="eager"
                    fetchPriority="low"
                />
                <Styled.ImageGrid>
                    {images.map((image, index) => (
                        <Styled.ImageGridItem
                            key={index}
                            src={image}
                            alt={`Show still ${index + 1} of ${images.length}`}
                            sizes="(min-width: 1400px) 170px, 14vw"
                            placeholder="blur"
                            loading="eager"
                            fetchPriority="low"
                            onClick={() => setSelectedImageIndex(index)}
                            $isSelected={selectedImageIndex === index}
                        />
                    ))}
                </Styled.ImageGrid>
            </Styled.Container>
        </Styled.FlexContainerWrapper>
    );
}
