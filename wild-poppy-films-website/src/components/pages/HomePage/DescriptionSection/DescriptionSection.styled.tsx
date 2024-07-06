import styled from "styled-components";

export const Container = styled.div`
    padding: 48px 20px;
`;

export const DescriptionContainer = styled.div`
    margin-bottom: 24px;
`;

export const Description = styled.span`
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.22px;
    color: ${({ theme }) => theme.colors.neutral.neutral_6};
`;

export const DescriptionGreen = styled(Description)`
    color: ${({ theme }) => theme.colors.secondary.core_green_light_2};
`;

export const CtaContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
