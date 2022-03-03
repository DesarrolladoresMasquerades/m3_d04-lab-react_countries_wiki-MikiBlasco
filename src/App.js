import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

const countriesCopy = [...countries]

function App() {

  const [countries, setCountries] = useState (countriesCopy)

  return (
    <div className="App">

    <Navbar />

    <CountriesList   countries = {countries} />

    <Routes>
      {countries.map((country)=> (
        <Route exact path={`/${country.alpha3Code}`} element={<CountryDetails country={country} />} />
      ))}
    </Routes>

    </div>
  )
}

export default App;
