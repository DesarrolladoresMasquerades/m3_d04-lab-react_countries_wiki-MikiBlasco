import { Link } from 'react-router-dom';

function CountriesList(props) {

  return (
    <div>
      <ul>
      {props.countries.map((country)=> (<li><Link to={`/${country.alpha3Code}`}>{country.name} </Link></li>))}
      </ul>
    </div>
  );
}

export default CountriesList;
