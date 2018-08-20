import styled from 'styled-components';
import { Borders } from '../../../styles/variables';

export const CalculatorButton = styled.button`
    border-width: 3px;
    border-radius: ${Borders.Radius};
    background: none;
    font-size: 2rem;
    outline: 0;
    &:disabled {
        opacity: 0.3;
    }
`;
