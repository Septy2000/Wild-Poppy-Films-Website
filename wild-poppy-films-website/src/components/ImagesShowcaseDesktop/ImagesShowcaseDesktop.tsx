// components/ImagesShowcaseDesktop.tsx
import React, { useState } from "react";
import * as Styled from "./ImagesShowcaseDesktop.styled";
import Image, { StaticImageData } from "next/image";

export default function ImagesShowcaseDesktop({ images }: { images: StaticImageData[] }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <Styled.FlexContainerWrapper>
            <Styled.Container>
                <Styled.SelectedImage
                    src={images[selectedImageIndex].src}
                    width={1500}
                    height={1500}
                    alt={`Selected Image`}
                    priority
                />
                <Styled.ImageGrid>
                    {images.map((image, index) => (
                        <Styled.ImageGridItem
                            src={image.src}
                            width={1500}
                            height={1500}
                            alt={`Image ${index + 1}`}
                            priority
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            $isSelected={selectedImageIndex === index}
                        />
                    ))}
                </Styled.ImageGrid>
            </Styled.Container>
        </Styled.FlexContainerWrapper>
    );
}
