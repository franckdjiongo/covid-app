import { ThemeProvider } from "@mui/material/styles";
import { useFetchDataAll } from "./CustomHooks/useFetchDataAll";
import { useMyLocation } from "./CustomHooks/useMyLocation";
import { useFetchDataYesterday } from "./CustomHooks/useFetchDataYesterday";
import { Route, Switch } from "react-router";
import React, { useMemo } from "react";
import GlobalPage from "./Pages/GlobalPage";
import MainPage from "./Pages/MainPage";
import theme from "./styles/styles";
import LoadingMessage from "./composants/LoadingMessage";
import Footer from "./composants/Footer";
import MainBar from "./composants/MainBar";

function App() {
  const dateYesterday = useMemo(
    () =>
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      (new Date().getDate() - 2),
    []
  );
  const [infoLocation, erreurLocation] = useMyLocation();
  const countryName = localStorage.getItem("country");
  const country = useMemo(() => countryName, [countryName]);
  const [countryData, loading, erreurCountryData] = useFetchDataAll(country);
  const [DataAll, , erreurDataAll] = useFetchDataAll("noCountry");
  const [dataYesterdayConfirmed, erreurDataYesterdayConfirmed] =
    useFetchDataYesterday(country, dateYesterday, "confirmed");
  const [dataYesterdayDeaths, erreurDataYesterdayDeaths] =
    useFetchDataYesterday(country, dateYesterday, "deaths");

  if (!countryData) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        {loading ? <LoadingMessage /> : undefined}
        <MainBar />
        <Switch>
          {!erreurLocation ||
          !erreurCountryData ||
          !erreurDataYesterdayConfirmed ||
          !erreurDataYesterdayDeaths ? (
            <Route path="/" exact>
              <MainPage
                infoLocation={infoLocation}
                data={[
                  countryData,
                  dataYesterdayConfirmed,
                  dataYesterdayDeaths,
                ]}
                erreurCountryData={erreurCountryData}
              />
            </Route>
          ) : undefined}
          <Route
            path="/global"
            render={(props) => (
              <GlobalPage
                {...props}
                data={DataAll}
                erreurDataAll={erreurDataAll}
              />
            )}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
