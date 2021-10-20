import React from "react";
import MesCards from "../composants/MesCards";
import Section from "../composants/sections/Section";
import { styled } from "@mui/system";
import Introduction from "../composants/Introduction";
import MainBar from "../composants/MainBar";

const Container = styled("div")({
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  //maxWidth: "90%",
});
const GlobalPage = () => {
  return (
    <>
      <MainBar />
      <Container>
        <Introduction nombrePaysAffecte={223} />
        <MesCards borderHaut={"none"} />
        <Section title={"REGIONS"} color="gray" />
        <Section title={"PAYS LES PLUS AFFECTÉS"} color="red" />
        <Section title={"PAYS LES MOINS AFFECTÉS"} color="yellow" />
      </Container>
    </>
  );
};

export default GlobalPage;
