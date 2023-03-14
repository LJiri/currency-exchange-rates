import { useQuery } from "react-query";
import { getCurrencies } from "./api/currencies";
import { ThemeProvider } from "styled-components";
import { Convertor, CurrencyTable } from "./components";
import {
  theme,
  GlobalStyles,
  AppWrapper,
  ContentWrapper,
  Section,
} from "./components/styles";

function App() {
  const { isLoading, isError, data } = useQuery("repoData", getCurrencies);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
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
    </ThemeProvider>
  );
}

export default App;
