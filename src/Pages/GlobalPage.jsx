import React, { useMemo } from "react";
import MesCards from "../composants/MesCards";
import Section from "../composants/sections/Section";
import { styled } from "@mui/system";
import Introduction from "../composants/Introduction";

const Container = styled("div")({
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  height: "93vh",
  //maxWidth: "90%",
});
const GlobalPage = ({ data, erreurDataAll }) => {
  const nombrePaysAffecte = useMemo(() => Object.values(data).length, [data]);
  const casTotal = useMemo(
    () =>
      Object.values(data)
        .map((country) => country.All.confirmed)
        .reduce((a, b) => a + b, 0),
    [data]
  );
  const casActif = useMemo(
    () =>
      Object.values(data)
        .map((country) => country.All.confirmed - country.All.deaths)
        .reduce((a, b) => a + b, 0),
    [data]
  );
  const casRetablis = useMemo(
    () =>
      Object.values(data)
        .map((country) => country.All.recovered)
        .reduce((a, b) => a + b, 0),
    [data]
  );
  const casMorts = useMemo(
    () =>
      Object.values(data)
        .map((country) => country.All.deaths)
        .reduce((a, b) => a + b, 0),
    [data]
  );

  const dataGlobal = [
    new Intl.NumberFormat().format(casTotal),
    new Intl.NumberFormat().format(casActif),
    new Intl.NumberFormat().format(casRetablis),
    new Intl.NumberFormat().format(casMorts),
  ];
  if (erreurDataAll) return <pre>{JSON.stringify(erreurDataAll, null, 2)}</pre>;
  return (
    <>
      <Container>
        <Introduction nombrePaysAffecte={nombrePaysAffecte} />
        <MesCards data={dataGlobal} borderHaut={"none"} />
        <Section title={"REGIONS"} color="gray" />
        <Section title={"PAYS LES PLUS AFFECTÉS"} color="red" />
        <Section title={"PAYS LES MOINS AFFECTÉS"} color="yellow" />
      </Container>
    </>
  );
};

export default GlobalPage;
