import { Routes, Route} from "react-router-dom"
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
