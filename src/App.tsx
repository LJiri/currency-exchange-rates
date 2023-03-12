import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";
import { CurrencyTable } from "./components/CurrencyTable";
import { Convertor } from "./components/Convertor";

function App() {
  const { isLoading, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      {data && (
        <div>
          <CurrencyTable data={data} />
          <Convertor currencies={data.currencies} />
        </div>
      )}
    </div>
  );
}

export default App;
