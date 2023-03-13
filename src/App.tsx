import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";
import { CurrencyTable } from "./components/CurrencyTable";
import { Convertor } from "./components/Convertor";
import { ContentWrapper } from "./components/styles/ContentWrapper.styled";
import { AppWrapper } from "./components/styles/AppWrapper.styled";
import { Section } from "./components/styles/Section.styled";
import { GlobalStyles } from "./components/styles/Global";

function App() {
  const { isLoading, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;

  return (
    <AppWrapper>
      <GlobalStyles />
      {data && (
        <ContentWrapper>
          <Section>
            <CurrencyTable data={data} />
          </Section>
          <Section>
            <Convertor currencies={data.currencies} />
          </Section>
        </ContentWrapper>
      )}
    </AppWrapper>
  );
}

export default App;
