import { Currency } from "../types";

export const convertCurrency = (amount: number, currency: Currency): number =>
  Number(((currency.amount / currency.rate) * amount).toFixed(3));
