import React, { Component } from 'react';
import { Spacing } from '../../../styles/variables';
import styled from 'styled-components'
import { CalculatorButton1 } from '../../atoms/CalculatorButton1';
import { CalculatorButton2 } from '../../atoms/CalculatorButton2';
import { CalculatorButton3 } from '../../atoms/CalculatorButton3';
import { CalculatorButton4 } from '../../atoms/CalculatorButton4';
import { CalculatorButton5 } from '../../atoms/CalculatorButton5';
import { CalculatorButton6 } from '../../atoms/CalculatorButton6';
import { CalculatorButton7 } from '../../atoms/CalculatorButton7';
import { CalculatorButton8 } from '../../atoms/CalculatorButton8';
import { CalculatorButton9 } from '../../atoms/CalculatorButton9';
import { CalculatorButton0 } from '../../atoms/CalculatorButton0';
import { CalculatorButtonAdd } from '../../atoms/CalculatorButtonAdd';
import { CalculatorButtonSubstract } from '../../atoms/CalculatorButtonSubstract';
import { CalculatorButtonMultiply } from '../../atoms/CalculatorButtonMultiply';
import { CalculatorButtonDivide } from '../../atoms/CalculatorButtonDivide';
import { CalculatorButtonEquals } from '../../atoms/CalculatorButtonEquals';
import { CalculatorButtonAC } from '../../atoms/CalculatorButtonAC';
import { CalculatorResult } from '../../atoms/CalculatorResult';

const StyledCalculatorWrapper = styled.div`
    width: 300px;
    height: 400px;
`;

const StyledCalculator = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas:
        "result result result result"
        "button-ac button-ac button-ac button-divide"
        "button-7 button-8 button-9 button-multiply"
        "button-4 button-5 button-6 button-substract"
        "button-1 button-2 button-3 button-add"
        "button-0 button-0 button-0 button-equals";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: ${Spacing.Tiny};
`;

export class Calculator extends Component {

    constructor() {
        super();

        this.defaultState = {
            result: 0,
            digits: [],
            operator: null,
            isNewNumber: true
        };

        this.state = { ...this.defaultState };
    }

    onDigitClick = (event) => {
        const value = parseInt(event.target.textContent, 10);
        this.setState((prevState) => {
            if (!prevState.isNewNumber) {
                const concatenatedValue = parseInt([prevState.digits[prevState.digits.length - 1], value].join(''), 10);
                prevState.digits.pop();

                return {
                    ...prevState,
                    result: concatenatedValue,
                    digits: [...prevState.digits, concatenatedValue]
                };
            } else {
                return {
                    ...prevState,
                    result: value,
                    isNewNumber: false,
                    digits: [...prevState.digits, value]
                };
            }
        });
    };

    onOperationClick = (event) => {
        const value = event.target.textContent;

        if (this.state.operator !== null) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    isNewNumber: true,
                    result: prevState.digits.reduce((accumulator, currentValue) => accumulator + currentValue)
                };
            });
        } else {
            switch (value) {
                case '+':
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            operator: value,
                            isNewNumber: true
                        };
                    });
                    break;
                case '=':
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            isNewNumber: true,
                            result: prevState.digits.reduce((accumulator, currentValue) => accumulator + currentValue)
                        };
                    });
                    break;
                default:
                    return false;
            }
        }
    };

    onClear = () => {
        this.setState(() => ({ ...this.defaultState }));
    };

    render() {
        return (
            <StyledCalculatorWrapper>
                <StyledCalculator>
                    <CalculatorResult>{this.state.result}</CalculatorResult>
                    <CalculatorButton1 onClick={this.onDigitClick}>1</CalculatorButton1>
                    <CalculatorButton2 onClick={this.onDigitClick}>2</CalculatorButton2>
                    <CalculatorButton3 onClick={this.onDigitClick}>3</CalculatorButton3>
                    <CalculatorButton4 onClick={this.onDigitClick}>4</CalculatorButton4>
                    <CalculatorButton5 onClick={this.onDigitClick}>5</CalculatorButton5>
                    <CalculatorButton6 onClick={this.onDigitClick}>6</CalculatorButton6>
                    <CalculatorButton7 onClick={this.onDigitClick}>7</CalculatorButton7>
                    <CalculatorButton8 onClick={this.onDigitClick}>8</CalculatorButton8>
                    <CalculatorButton9 onClick={this.onDigitClick}>9</CalculatorButton9>
                    <CalculatorButton0 onClick={this.onDigitClick}>0</CalculatorButton0>
                    <CalculatorButtonAdd onClick={this.onOperationClick}>+</CalculatorButtonAdd>
                    <CalculatorButtonSubstract onClick={this.onOperationClick} disabled>-</CalculatorButtonSubstract>
                    <CalculatorButtonMultiply onClick={this.onOperationClick} disabled>x</CalculatorButtonMultiply>
                    <CalculatorButtonDivide  onClick={this.onOperationClick} disabled>÷</CalculatorButtonDivide>
                    <CalculatorButtonEquals onClick={this.onOperationClick}>=</CalculatorButtonEquals>
                    <CalculatorButtonAC onClick={this.onClear}>AC</CalculatorButtonAC>
                </StyledCalculator>
            </StyledCalculatorWrapper>
        );
    }
}
