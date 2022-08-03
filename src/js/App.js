import { useState } from "react";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import FlagSearch from "./components/FlagSearch";
import useFetch from "./hooks/useFetch";

let request = new XMLHttpRequest();



function App() {
  const {data: flags, isPending, error} = useFetch('https://restcountries.com/v3.1/all');
  const [darkMode, setDarkMode] = useState(false);

  //console.log(flags)
  return (
    <div className="App">
      <Header setDarkMode = {setDarkMode} darkMode = {darkMode} />
      <FlagSearch flags = {flags} darkMode = {darkMode} />
      <Attribution />
    </div>
  );
}

export default App;
