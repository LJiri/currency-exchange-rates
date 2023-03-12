export interface Currency {
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