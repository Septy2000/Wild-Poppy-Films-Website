import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    

    padding: 48px 60px 48px 20px;
    background: ${({ theme }) => theme.colors.neutral.neutral_14};
    
`;

