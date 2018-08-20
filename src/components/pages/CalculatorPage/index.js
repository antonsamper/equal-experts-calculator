import React from 'react';
import { CenteredTemplate } from '../../templates/CenteredTemplate';
import { Calculator } from '../../molecules/Calculator';
import { Header } from '../../molecules/Header';

export const CalculatorPage = () => (
    <CenteredTemplate>
        <div>
            <Header />
            <Calculator />
        </div>
    </CenteredTemplate>)
;