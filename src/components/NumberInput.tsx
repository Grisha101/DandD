import * as React from 'react';
import { NumberInputButton, NumberInputLabel, NumberInputValue, NumberInputWrapper } from './NumberInput.styled';

export const NumberInput = (props: NumberInputProps) => {
  const [value, setValue] = React.useState(props.value);

  const onButtonClick = (action: ActionType, event: React.MouseEvent<HTMLButtonElement>) => {
    if (action === 'increment') {
      setValue(value + 1);
    } else if (action === 'decrement') {
      setValue(value - 1);
    }
    props.onChange(value);
  }

  return (
    <NumberInputWrapper>
      {props.label && (
        <NumberInputLabel>{props.label}</NumberInputLabel>
      )}
      <NumberInputButton onClick={event => onButtonClick('decrement', event)}>-</NumberInputButton>
      <NumberInputValue>{value}</NumberInputValue>
      <NumberInputButton onClick={event => onButtonClick('increment', event)}>+</NumberInputButton>
    </NumberInputWrapper>
  );
};