import Introduction from "./composants/Introduction";
import MainBar from "./composants/MainBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/styles";
import MesCards from "./composants/MesCards";
import Section from "./composants/sections/Section";
import { styled } from "@mui/system";

const Container = styled("div")({
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  //maxWidth: "90%",
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBar />
        <Container>
          <Introduction nombrePaysAffecte={223} />
          <MesCards borderHaut={"none"} />
          <Section title={"REGIONS"} color="gray" />
          <Section title={"PAYS LES PLUS AFFECTÉS"} color="red" />
          <Section title={"PAYS LES MOINS AFFECTÉS"} color="yellow" />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
