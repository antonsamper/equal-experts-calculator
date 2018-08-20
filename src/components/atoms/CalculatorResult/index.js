import styled from 'styled-components';
import { Colours, Borders } from '../../../styles/variables';

export const CalculatorResult = styled.div`
    grid-area: result;
    background: ${Colours.DoveGray};
    border-radius: ${Borders.Radius};
    text-align: right;
    font-size: 2rem;
    padding: 1rem;
    color: ${Colours.White};
`;