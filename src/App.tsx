import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";
import { CurrencyTable } from "./components/CurrencyTable";

function App() {
  const { isLoading, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;

  return <div className="App">{data && <CurrencyTable data={data} />}</div>;
}

export default App;
