import InputForm from "./components/InputForm";
import DisplayPhoto from "./components/DisplayPhoto";
import './App.css'
import { useState } from "react";
function App() {
  const [configs, setConfigs] = useState({
    x: 50,
    y: 112,
    scale: 1
  })
  return (
    <div className="App">
      <InputForm configs={configs} setConfigs={setConfigs} />
      <DisplayPhoto configs={configs} />
    </div>
  );
}

export default App;