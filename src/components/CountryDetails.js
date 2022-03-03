import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function CountryDetails(props) {

    return(
        
        <div class="col-7">
         <img src={`https://flagpedia.net/data/flags/w580/${props.country.alpha2Code.toLowerCase()}.png`}
        alt="" width="100px" height="auto" />
        <h1>{props.country.name}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{props.country.area}</td>
            </tr>
            <tr>
              <td>{props.country.area}</td>
              <td>
                551695 km <sup>2</sup>
              </td>
            </tr>
            <tr>
            <td>Borders</td>
                        <td>
                            <ul>
                                {props.country.borders.map((border)=>{
                                    return(
                                        <li>
                                     
                                        </li>
                                    )}
                                    )}
                            </ul>
                        </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
}

export default CountryDetails