import { FormEvent, useState } from "react";
import { Currency, FormElements, ConvertedCurrency } from "../types";
import { Convertor as ConvertorStyled } from "./styles/Convertor.styled";
import { Button } from "./styles/Button.styled";
import { ConvertorResult } from "./styles/ConvertorResult.styled";
import { NumberInput } from "./NumberInput";
import { CurrencySelect } from "./CurrencySelect";
import { convertCurrency, getCurrencyById } from "../helpers";

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
