import { Select } from "./styles/Select.styled";
import { Currency } from "../types";

interface Props {
  currencies: Currency[];
}

export const CurrencySelect = ({ currencies }: Props): JSX.Element => (
  <Select>
    <select name="currency">
      {currencies.map((item: Currency) => (
        <option key={item.id} value={item.id}>
          {`${item.country} - ${item.currency}`}
        </option>
      ))}
    </select>
  </Select>
);
