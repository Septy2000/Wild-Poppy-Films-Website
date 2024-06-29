import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.neutral.neutral_1};
    margin-bottom: 16px;

    // mobile
    padding: 12px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25), 22px 16px 8px 0px rgba(0, 0, 0, 0),
        14px 10px 7px 0px rgba(0, 0, 0, 0.01), 8px 6px 6px 0px rgba(0, 0, 0, 0.05),
        4px 3px 4px 0px rgba(0, 0, 0, 0.09), 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const FilmImage = styled(Image)`
    width: 96px;
    height: 96px;
    border-radius: 4px;
`;

// to delete after importing images for each film
export const FilmImagePlaceholder = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 4px;
    background: black;
`;

export const FilmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: start;
`;

export const FilmTitleAndYearContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const FilmTitle = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

export const FilmYear = styled.p`
    color: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_dark_1};
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
`;

export const FilmDescriptionContainer = styled.div``;

export const DefaultText = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_9};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
`;

export const ProductionText = styled(DefaultText)`
    color: ${({ theme }) => theme.colors.secondary.core_green};
`;
