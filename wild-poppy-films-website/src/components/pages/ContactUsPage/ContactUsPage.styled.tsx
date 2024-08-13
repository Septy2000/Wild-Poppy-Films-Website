"use client";
import styled from "styled-components";

export const PageWrapper = styled.div`
    margin-top: ${({ theme }) => theme.navbar_height.mobile};
    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        margin-top: ${({ theme }) => theme.navbar_height.tablet};
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        margin-top: ${({ theme }) => theme.navbar_height.desktop};
    }
`;

export const Container = styled.div`
    padding: 4rem 1.25rem 8rem 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 4rem 2rem 8rem 2rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 4rem 4rem 8rem 4rem;
    }
`;

export const PageInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 3rem;
`;

export const FormGridContainer = styled.form`
    display: grid;
    gap: 1.5rem;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
`;

export const Title = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary.poppy_red};
`;

export const Text = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.neutral_11};
    font-weight: 300;
`;

export const InputBox = styled.input`
    padding: 1rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary.celadon_blue_light_1};
    background: ${({ theme }) => theme.colors.neutral_shaded.neutral_2};

    &:hover {
        background: ${({ theme }) => theme.colors.neutral_shaded.neutral_3};
    }

    &:focus {
        background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_light_1};
    }
`;

export const TextArea = styled.textarea`
    padding: 1rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary.celadon_blue_light_1};
    background: ${({ theme }) => theme.colors.neutral_shaded.neutral_2};
    height: 150px; /* Adjust the height as needed */
`;
