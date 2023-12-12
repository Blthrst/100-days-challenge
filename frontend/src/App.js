import { Routes, Route} from "react-router-dom"
import { Header } from "./components/homepage/header";
import { Main } from "./components/homepage/main";
import { Hot } from "./components/homepage/hot";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Hot/>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
