import Introduction from "./composants/Introduction";
import MainBar from "./composants/MainBar";

function App() {
  return (
    <>
      <MainBar />
      <Introduction nombrePaysAffecte={223} />
    </>
  );
}

export default App;
