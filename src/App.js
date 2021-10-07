import Introduction from "./composants/Introduction";
import MainBar from "./composants/MainBar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/styles";
import MesCards from "./composants/MesCards";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBar />
        <Introduction nombrePaysAffecte={223} />
        <MesCards />
      </ThemeProvider>
    </>
  );
}

export default App;
