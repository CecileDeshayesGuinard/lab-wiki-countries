import {Link} from 'react-router-dom'


function CountriesList (props) {
    console.log('props ', props.dataCountries)
    return(
        <ul>  
            {props.dataCountries.map(function(el){
                return <Link to={`/${el.alpha3Code}`}><li key={el.name.common}>{el.name.common}</li></Link>
            })}
        </ul>
    )
}

export default CountriesList;