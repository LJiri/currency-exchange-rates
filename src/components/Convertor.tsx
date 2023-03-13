import { FormEvent, useState } from "react";
import { Currency } from "../types";
import { Convertor as ConvertorStyled } from "./styles/Convertor.styled";
import { Button } from "./styles/Button.styled";
import { ConvertorResult } from "./styles/ConvertorResult.styled";
import { NumberInput } from "./NumberInput";
import { CurrencySelect } from "./CurrencySelect";

interface FormElements extends HTMLFormControlsCollection {
  currency: HTMLInputElement;
  amount: HTMLSelectElement;
}

interface ConvertedCurrency extends Currency {
  amountForConversion: number;
  convertedValue: number;
}

const convertCurrency = (amount: number, currency: Currency): number =>
  Number(((currency.amount / currency.rate) * amount).toFixed(3));

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
    <ConvertorStyled>
      <form onSubmit={handleSubmit} noValidate>
        <CurrencySelect currencies={currencies} />
        <NumberInput
          name="amount"
          inputError={inputError}
          placeholder="amount"
        />
        <Button type="submit">Convert currency</Button>
      </form>
      {convertedCurrency && (
        <ConvertorResult>
          <div>{`${convertedCurrency.amountForConversion} CZK`}</div>
          <div>=</div>
          <div>
            {`${convertedCurrency.convertedValue} ${convertedCurrency.code}`}
          </div>
        </ConvertorResult>
      )}
    </ConvertorStyled>
  );
};
