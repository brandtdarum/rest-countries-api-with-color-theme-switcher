import { useState } from "react";
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import FlagSearch from "./components/FlagSearch";
import FlagDetails from "./components/FlagDetails";
import useFetch from "./hooks/useFetch";
import { Navigate, Route, Routes } from "react-router-dom";

let request = new XMLHttpRequest();



function App() {
  const {data: flags, isPending, error} = useFetch('https://restcountries.com/v3.1/all');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header setDarkMode = {setDarkMode} darkMode = {darkMode} />
      <Routes>
        <Route path='/' element={<FlagSearch flags = {flags} darkMode = {darkMode} />} />
        <Route path='/rest-countries-api-with-color-theme-switcher' element={<Navigate to='/' replace/>} />
        <Route path='/flag/:flagName' element={<FlagDetails flags = {flags} darkmode = {darkMode}/>} />
      </Routes>
      <Attribution />
    </div>
  );
}

export default App;
