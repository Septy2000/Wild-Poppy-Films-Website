import styled from "styled-components";
import Image from "next/image";

export const FlexContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral.neutral_1};
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
    max-width: 80rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutral.neutral_1};

    padding: 4rem;

    user-select: none;
    align-self: center;
`;

export const SelectedImage = styled(Image)`
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.5rem;
    object-fit: cover;
`;

export const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.75rem;
`;

export const ImageGridItem = styled(Image)<{ $isSelected: boolean }>`
    width: 100%;
    height: 100%;

    max-width: 600px;
    aspect-ratio: 1 / 1;
    border-radius: 0.5rem;
    cursor: pointer;
    border: ${({ theme, $isSelected }) =>
        $isSelected ? `4px solid ${theme.colors.secondary.core_green_light_2}` : "none"};
    object-fit: cover;
`;
