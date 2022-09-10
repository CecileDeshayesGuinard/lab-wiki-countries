import { Link, useParams } from 'react-router-dom'



function CountryDetails (props) {
    //
    // 1. extraire le alpha3 de l'url -> useParams()
    // 2. avec, retrouver l'objet detail parmi le tableau de tous les pays -> .find()
    //

    let {countryId} = useParams()
    console.log('dataCountries ', props.dataCountries)

    const selectedCountry = props.dataCountries.find(el => {
    return el.alpha3Code === countryId    
    })
    const countryLetter = (selectedCountry.alpha2Code).toLowerCase()
    
    
    console.log('selectedCountry ', selectedCountry)
    
    return(
        <div className='CountryDetails'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryLetter}.png`} alt=''/>
            <h2>{selectedCountry.name.common}</h2>
            <table>
                <tr>Capital<td>{selectedCountry.capital}</td></tr>
                <tr>Area<td>{selectedCountry.area}</td></tr>
            
            <tr>Borders
              <td>  
                <ul>  
                    {selectedCountry.borders.map(function(el){
                    console.log('link ', el)
                    return <Link to={`/${el}`}><li key={selectedCountry.name.common}>{el}</li></Link>
                    })}
                </ul>               
              </td>  

            </tr>
        </table>
       </div>
    )
}

export default CountryDetails