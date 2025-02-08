import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HtmlForm from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HtmlForm />
    </>
  );
}

export default App;
