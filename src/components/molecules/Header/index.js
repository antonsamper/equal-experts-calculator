import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../atoms/Logo';
import { Colours, Spacing } from '../../../styles/variables';

const StyledHeader = styled.div`
    height: 100px;
    fill: ${Colours.DoveGray};
    margin-bottom: ${Spacing.Small};
`;

export const Header = () => (
    <StyledHeader>
        <Logo />
    </StyledHeader>
);