export interface Currency {
  id: string;
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

export interface ExchangeRatesData {
  currencies: Currency[];
  date: Date;
}

export interface FormElements extends HTMLFormControlsCollection {
  currency: HTMLInputElement;
  amount: HTMLSelectElement;
}

export interface ConvertedCurrency extends Currency {
  amountForConversion: number;
  convertedValue: number;
}
