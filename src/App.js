import { useState, useCallback } from "react";
import InputForm from "./components/InputForm";
import DisplayPhoto from "./components/DisplayPhoto";
import './App.css'
function App() {
  const [data, setData] = useState({})
  const getData = useCallback((data)=>{
    setData(data)
  }, [])
  return (
    <div className="App">
      <InputForm getData={getData} />
      <DisplayPhoto data={data} />
    </div>
  );
}

export default App;