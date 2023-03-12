import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";

function App() {
  const { isLoading, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <div>{data}</div>
    </div>
  );
}

export default App;
