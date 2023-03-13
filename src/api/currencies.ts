import axios from "axios";
import { parseExchangeRatesData } from "../helpers";

export const getCurrencies = () =>
  axios
    .get(
      "/api//en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
    )
    .then((res) => parseExchangeRatesData(res.data));
