export interface Currency {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

interface ExchangeRatesData {
  currencies: Currency[];
  date: Date;
}

export const parseExchangeRatesData = (data: string): ExchangeRatesData => {
  const lines = getLines(data);

  // remove and store first line
  const dateLine: string = lines.shift() || "";

  // remove second line
  lines.shift();

  return {
    currencies: getCurrencies(lines),
    date: getDate(dateLine),
  };
};

const getLines = (data: string): string[] => data.split("\n");

const getCurrencies = (lines: string[]): Currency[] => {
  const currencies: Currency[] = [];
  lines.forEach((line) => currencies.push(getCurrencyObject(line)));
  return currencies;
};

const getCurrencyObject = (data: string): any => {
  const parsedData = data.split("|");

  return {
    country: parsedData[0],
    currency: parsedData[1],
    amount: Number(parsedData[2]),
    code: parsedData[3],
    rate: Number(parsedData[4]),
  };
};

const getDate = (firstLine: string): Date => {
  const words = firstLine.split(" ");
  // remove ordinal number
  words.pop();
  const dateStirng = words.join(" ");

  return new Date(dateStirng);
};
