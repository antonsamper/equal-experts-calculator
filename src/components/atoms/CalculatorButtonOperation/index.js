import { CalculatorButton } from '../CalculatorButton';
import { Colours } from '../../../styles/variables';

export const CalculatorButtonOperation = CalculatorButton.extend`
  color: ${Colours.SchoolBusYellow};
  border-color: ${Colours.SchoolBusYellow};
  background: none;
  font-size: 2rem;
`;