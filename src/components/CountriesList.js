import { Link } from 'react-router-dom';

function CountriesList(props) {

  return (
    <div class="list-group">
      <ul>
      {props.countries.map((country)=> (
          <li>
          <h3>{country.name}</h3>
          <Link to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
        alt="" width="100px" height="auto" /> </Link></li>))}
      </ul>
    </div>
  );
}

export default CountriesList;
