import { ThemeProvider } from "@mui/material/styles";
import { useFetchDataAll } from "./CustomHooks/UseFetchDataAll";
import { useMyLocation } from "./CustomHooks/UseMyLocation";
import { useFetchDataYesterday } from "./CustomHooks/useFetchDataYesterday";
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
      (new Date().getDate() - 1),
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
        {/* <GlobalPage /> */}
        {!erreurLocation ||
        !erreurDataAll ||
        !erreurDataYesterdayConfirmed ||
        !erreurDataYesterdayDeaths ? (
          <MainPage
            infoLocation={infoLocation}
            data={[dataAll, dataYesterdayConfirmed, dataYesterdayDeaths]}
            erreurDataAll={erreurDataAll}
          />
        ) : undefined}
      </ThemeProvider>
    </>
  );
}

export default App;
