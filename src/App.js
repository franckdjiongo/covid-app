import Introduction from "./composants/Introduction";
import MainBar from "./composants/MainBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/styles";

function App() {
  return (
    <>
      <ThemeProvider sx={{ flexGrow: 1 }} theme={theme}>
        <MainBar />
        <Introduction nombrePaysAffecte={223} />
      </ThemeProvider>
    </>
  );
}

export default App;
