import { Routes, Route } from "react-router-dom";

function CountryDetails(props) {

    return(

        <a class="list-group-item list-group-item-action" href="/ABW">
        <img src={`https://flagpedia.net/data/flags/w580/${props.country.alpha2Code.toLowerCase()}.png`}
alt="" width="100px" height="auto" />
        <p>Aruba</p>
        </a>
        

    )
}

export default CountryDetails