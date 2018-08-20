import React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from './index';
import { CalculatorButton1 } from '../../atoms/CalculatorButton1';
import { CalculatorButton3 } from '../../atoms/CalculatorButton3';
import { CalculatorButtonAdd } from '../../atoms/CalculatorButtonAdd';
import { CalculatorButtonEquals } from '../../atoms/CalculatorButtonEquals';
import { CalculatorButtonAC } from '../../atoms/CalculatorButtonAC';

it('renders without crashing', () => {
    shallow(<Calculator />);
});

it('add 2 small numbers together and press equals', () => {
    const wrapper = shallow(<Calculator />);
    const button1 = wrapper.find(CalculatorButton1);
    const buttonCalculator = wrapper.find(CalculatorButtonEquals);
    const buttonAdd = wrapper.find(CalculatorButtonAdd);

    expect(wrapper.state().result).toEqual(0);
    button1.simulate('click', { target: { textContent: '1' } });
    buttonAdd.simulate('click', { target: { textContent: '+' } });
    button1.simulate('click', { target: { textContent: '1' } });
    buttonCalculator.simulate('click', { target: { textContent: '=' } });
    expect(wrapper.state().result).toEqual(2);
});

it('add 3 large numbers together and get total with the operator', () => {
    const wrapper = shallow(<Calculator />);
    const button1 = wrapper.find(CalculatorButton1);
    const button3 = wrapper.find(CalculatorButton3);
    const buttonAdd = wrapper.find(CalculatorButtonAdd);

    expect(wrapper.state().result).toEqual(0);
    button1.simulate('click', { target: { textContent: '1' } });
    button1.simulate('click', { target: { textContent: '1' } });
    buttonAdd.simulate('click', { target: { textContent: '+' } });
    button3.simulate('click', { target: { textContent: '3' } });
    button3.simulate('click', { target: { textContent: '3' } });
    buttonAdd.simulate('click', { target: { textContent: '+' } });
    button1.simulate('click', { target: { textContent: '1' } });
    button1.simulate('click', { target: { textContent: '1' } });
    buttonAdd.simulate('click', { target: { textContent: '+' } });
    expect(wrapper.state().result).toEqual(55);
});

it('can clear the results', () => {
    const wrapper = shallow(<Calculator />);
    const button1 = wrapper.find(CalculatorButton1);
    const button3 = wrapper.find(CalculatorButton3);
    const buttonCalculator = wrapper.find(CalculatorButtonEquals);
    const buttonAdd = wrapper.find(CalculatorButtonAdd);
    const buttonAC = wrapper.find(CalculatorButtonAC);

    expect(wrapper.state().result).toEqual(0);
    button1.simulate('click', { target: { textContent: '1' } });
    buttonAdd.simulate('click', { target: { textContent: '+' } });
    button3.simulate('click', { target: { textContent: '3' } });
    buttonCalculator.simulate('click', { target: { textContent: '=' } });
    expect(wrapper.state().result).toEqual(4);
    buttonAC.simulate('click', { target: { textContent: '=' } });
    expect(wrapper.state().result).toEqual(0);
});