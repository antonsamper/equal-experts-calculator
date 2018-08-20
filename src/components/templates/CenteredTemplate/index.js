import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
    justify-items: center;
`;

export const CenteredTemplate = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);