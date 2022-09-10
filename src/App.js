// src/App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import dataCountries from './countries.json'

function App() {
  return (<div className="App">
    <NavBar />

    <Routes>
      <Route path="/" element={<CountriesList dataCountries={dataCountries}/>}/>
      <Route path="/:countryId" element={<CountryDetails dataCountries={dataCountries}/>}/>
    </Routes>

  </div>
  )
}
export default App;
