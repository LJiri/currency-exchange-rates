import { NumberInput as NumberInputStyled } from "./styles/NumberInput.styled";

interface Props {
  name: string;
  inputError?: string;
  placeholder?: string;
}

export const NumberInput = ({
  name,
  inputError,
  placeholder,
}: Props): JSX.Element => (
  <NumberInputStyled>
    <input type="number" name={name} placeholder={placeholder} />
    {inputError && <div>{inputError}</div>}
  </NumberInputStyled>
);
