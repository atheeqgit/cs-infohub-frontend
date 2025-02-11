import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HtmlForm from "./components/Form";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HtmlForm /> */}
      <Home />
    </div>
  );
}

export default App;
