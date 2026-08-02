import { StaticImageData } from "next/image";
import * as Styled from "./ImageCarousel.styled";
import React, { useState } from "react";

export default function ImageCarousel({
    images,
    filmTitle,
}: {
    images: StaticImageData[];
    filmTitle: string;
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <Styled.Container>
            <Styled.Carousel $currentImageIndex={currentImageIndex}>
                {images.map((image, index) => (
                    // Displayed at a fixed 15rem (240px) - without `sizes` the browser
                    // assumed full viewport width and downloaded the largest srcset entry.
                    <Styled.ImageStyled
                        key={index}
                        src={image}
                        alt={`${filmTitle} - still ${index + 1} of ${images.length}`}
                        sizes="240px"
                        placeholder="blur"
                        loading="eager"
                        fetchPriority="low"
                    />
                ))}
            </Styled.Carousel>
            <Styled.ArrowsContainer>
                <Styled.ArrowContainer
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                        setCurrentImageIndex(
                            (currentImageIndex - 1 + images.length) % images.length
                        )
                    }
                >
                    <Styled.ArrowLeftStyled aria-hidden="true" />
                </Styled.ArrowContainer>
                <Styled.ArrowContainer
                    type="button"
                    aria-label="Next image"
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                >
                    <Styled.ArrowRightStyled aria-hidden="true" />
                </Styled.ArrowContainer>
            </Styled.ArrowsContainer>
            <Styled.ImageCounter aria-live="polite">{`${currentImageIndex + 1} / ${
                images.length
            }`}</Styled.ImageCounter>
        </Styled.Container>
    );
}
