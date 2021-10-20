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
  const [dataAll, loading, erreurDataAll] = useFetchDataAll(country);
  const [dataYesterdayConfirmed, erreurDataYesterdayConfirmed] =
    useFetchDataYesterday(country, dateYesterday, "confirmed");
  const [dataYesterdayDeaths, erreurDataYesterdayDeaths] =
    useFetchDataYesterday(country, dateYesterday, "deaths");

  if (loading) {
    return <LoadingMessage />;
  }
  if (!dataAll) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          {!erreurLocation ||
          !erreurDataAll ||
          !erreurDataYesterdayConfirmed ||
          !erreurDataYesterdayDeaths ? (
            <Route
              path="/"
              exact
              // render={(props) => (
              //   <MainPage
              //     {...props}
              //     infoLocation={infoLocation}
              //     data={[dataAll, dataYesterdayConfirmed, dataYesterdayDeaths]}
              //     erreurDataAll={erreurDataAll}
              //   />
              // )}
            >
              {" "}
              <MainPage
                infoLocation={infoLocation}
                data={[dataAll, dataYesterdayConfirmed, dataYesterdayDeaths]}
                erreurDataAll={erreurDataAll}
              />
            </Route>
          ) : undefined}
          <Route path="/global" component={GlobalPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
