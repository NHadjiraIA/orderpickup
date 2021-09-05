import "./App.css";
import WrapperComponent from "./components/WrapperComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BrowserRouter>
        <WrapperComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
