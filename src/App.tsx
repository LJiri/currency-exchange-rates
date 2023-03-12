import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";
import { Currency } from "./helpers/parseExchangeRatesData";

function App() {
  const { isLoading, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {data?.currencies.map((item: Currency, index: number) => (
        <div key={index}>{item.currency}</div>
      ))}
    </div>
  );
}

export default App;
