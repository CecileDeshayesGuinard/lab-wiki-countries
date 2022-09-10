// src/App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (<div className="App">

    <NavBar />

    <CountriesList />

    <CountryDetails />

    <Routes>
      <Route />
    </Routes>


  </div>
  )
}
export default App;
