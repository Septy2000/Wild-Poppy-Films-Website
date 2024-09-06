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
    overflow: hidden;
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
        flex-direction: row;
        align-items: flex-start;
        gap: 2rem;
    }
`;

export const SubmitButtonContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        justify-content: flex-end;
    }
`;

export const PageInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 54rem;
`;

export const FormGridContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    grid-template-columns: 1fr;
`;

export const NameEmailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        flex-direction: row;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_light_1};
    margin: 1.5rem 0;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        display: none;
    }
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
    height: 3.5rem;
    width: 100%;
    max-width: 54rem;

    &:hover {
        background: ${({ theme }) => theme.colors.neutral_shaded.neutral_3};
    }

    &:focus {
        background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_light_1};
    }
`;

export const NameInputBox = styled(InputBox)``;

export const EmailInputBox = styled(InputBox)``;

export const TextArea = styled.textarea`
    padding: 1rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary.celadon_blue_light_1};
    background: ${({ theme }) => theme.colors.neutral_shaded.neutral_2};
    height: 10rem;
    min-width: 100%;
    max-width: 100%;

    resize: vertical;
    grid-row: 2 / span 2;

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        width: 100%;
        max-width: 108rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.neutral_shaded.neutral_3};
    }

    &:focus {
        background: ${({ theme }) => theme.colors.secondary_shaded.celadon_blue_light_1};
    }
`;

export const SuccessMessage = styled.p`
    color: ${({ theme }) => theme.colors.neutral.neutral_11};
    font-size: 1rem;
`;

export const MessageTextBox = styled(TextArea)``;
