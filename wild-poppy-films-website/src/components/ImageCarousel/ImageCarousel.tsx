import { StaticImageData } from "next/image";
import * as Styled from "./ImageCarousel.styled";
import React, { useState } from "react";

export default function ImageCarousel({ images }: { images: StaticImageData[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <Styled.Container>
            <Styled.Carousel $currentImageIndex={currentImageIndex}>
                {images.map((image, index) => (
                    <Styled.ImageStyled
                        priority
                        width={300}
                        height={300}
                        key={index}
                        src={image.src}
                        alt={`carousel-image-${index + 1}`}
                    />
                ))}
            </Styled.Carousel>
            <Styled.ArrowsContainer>
                <Styled.ArrowContainer
                    onClick={() =>
                        setCurrentImageIndex(
                            (currentImageIndex - 1 + images.length) % images.length
                        )
                    }
                >
                    <Styled.ArrowLeftStyled />
                </Styled.ArrowContainer>
                <Styled.ArrowContainer
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                >
                    <Styled.ArrowRightStyled />
                </Styled.ArrowContainer>
            </Styled.ArrowsContainer>
            <Styled.ImageCounter>{`${currentImageIndex + 1} / ${
                images.length
            }`}</Styled.ImageCounter>
        </Styled.Container>
    );
}
