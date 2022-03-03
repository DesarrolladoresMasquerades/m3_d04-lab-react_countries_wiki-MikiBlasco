import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const countriesCopy = [...countries];

function App() {
  const [countries, setCountries] = useState(countriesCopy);

  return (
    <div>
      <Navbar />

      <div className="Container">
        <div class="row">
          <CountriesList countries={countries} />

          <Routes>
            {countries.map((country) => (
              <Route
                exact
                path={`/${country.alpha3Code}`}
                element={<CountryDetails country={country} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
