import axios from "axios";

export const getCurrencies = () =>
  axios
    .get(
      "/api//en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
    )
    .then((res) => res.data);
