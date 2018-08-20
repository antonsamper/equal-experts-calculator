import { css }         from 'styled-components';
import { Breakpoints } from './variables';

export const Media = Object.keys(Breakpoints).reduce((accumulator, label) => {

    const size = Breakpoints[label] / 16;

    accumulator[label] = (...args) => css`
        @media (min-width: ${size}em) {
          ${css(...args)}
        }
    `;

    return accumulator;
}, {});
