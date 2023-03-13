import { Currency } from "../types";

export const getCurrencyById = (id: string, currencies: Currency[]) =>
  currencies.find((currency: Currency) => currency.id === id);
