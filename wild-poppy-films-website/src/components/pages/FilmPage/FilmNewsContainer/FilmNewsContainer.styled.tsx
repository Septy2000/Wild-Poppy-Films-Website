import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    width: 16rem;
    height: 20rem;
`;

export const ImageStyled = styled(Image)`
    width: 16rem;
    height: 9rem;
    object-fit: cover;
`;

export const Content = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_14};
    line-height: 150%;
`;
