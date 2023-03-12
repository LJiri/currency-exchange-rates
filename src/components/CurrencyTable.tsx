import { ExchangeRatesData, Currency } from "../types";

export const CurrencyTable = ({ data }: { data: ExchangeRatesData }) => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>Currency</th>
        <th>Amount</th>
        <th>Code</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      {data?.currencies.map((item: Currency, index: number) => (
        <tr key={index}>
          <td>{item.country}</td>
          <td>{item.currency}</td>
          <td>{item.amount}</td>
          <td>{item.code}</td>
          <td>{item.rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);