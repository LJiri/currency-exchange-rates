import { FormEvent, useState } from "react";
import { Currency } from "../types";

interface FormElements extends HTMLFormControlsCollection {
  currency: HTMLInputElement;
  amount: HTMLSelectElement;
}

interface ConvertedCurrency extends Currency {
  amountForConversion: number;
  convertedValue: number;
}

const convertCurrency = (amount: number, currency: Currency): number =>
  (currency.rate / currency.amount) * amount;

const getCurrencyById = (id: string, currencies: Currency[]) =>
  currencies.find((currency: Currency) => currency.id === id);

export const Convertor = ({
  currencies,
}: {
  currencies: Currency[];
}): JSX.Element => {
  const [inputError, setInputError] = useState("");
  const [convertedCurrency, setConvertedCurrency] =
    useState<ConvertedCurrency | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elements = event.currentTarget.elements as FormElements;
    const amount = Number(elements.amount.value);

    if (!amount) {
      setInputError("Amount must be a number");
      return;
    }

    if (inputError) {
      setInputError("");
    }

    const currencyId = elements.currency.value;
    const currency = getCurrencyById(currencyId, currencies);

    if (currency && convertCurrency(amount, currency)) {
      setConvertedCurrency({
        ...currency,
        amountForConversion: amount,
        convertedValue: convertCurrency(amount, currency),
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <select name="currency">
          {currencies.map((item: Currency) => (
            <option key={item.id} value={item.id}>
              {`${item.country} - ${item.currency}`}
            </option>
          ))}
        </select>
        <input type="number" name="amount" />
        <div>{inputError}</div>
        <button type="submit">Convert currency</button>
      </form>
      {convertedCurrency && (
        <div>
          {`${convertedCurrency.amountForConversion} CZK is ${convertedCurrency.convertedValue} ${convertedCurrency.code}`}
        </div>
      )}
    </div>
  );
};
