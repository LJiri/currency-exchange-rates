import { ExchangeRatesData, Currency } from "../types";

export const parseExchangeRatesData = (data: string): ExchangeRatesData => {
  const lines = getLines(data);

  // remove and store first line
  const dateLine: string = lines.shift() || "";

  // remove second line
  lines.shift();

  // remove last empty line
  lines.pop();

  return {
    currencies: getCurrencies(lines),
    date: getDate(dateLine),
  };
};

const getLines = (data: string): string[] => data.split("\n");

const getCurrencies = (lines: string[]): Currency[] => {
  const currencies: Currency[] = [];
  lines.forEach((line, index) =>
    currencies.push(getCurrencyObject(line, String(index)))
  );
  return currencies;
};

const getCurrencyObject = (data: string, id: string): any => {
  const parsedData = data.trim().split("|");

  return {
    id: id,
    country: parsedData[0],
    currency: parsedData[1],
    amount: Number(parsedData[2]),
    code: parsedData[3],
    rate: Number(parsedData[4]),
  };
};

const getDate = (firstLine: string): Date => {
  const words = firstLine.trim().split(" ");
  // remove ordinal number
  words.pop();
  const dateStirng = words.join(" ");

  return new Date(dateStirng);
};
