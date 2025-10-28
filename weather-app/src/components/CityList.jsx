import weatherData from "../mockWeatherData"
export default function CityList({onClickCity}){

    return(
        <>
            <ul>
              {
                Object.keys(weatherData).map((city,index)=>(
                    <li key={index}> <button onClick={()=>onClickCity(city)} >{city} </button></li>
                ))
              }
            </ul>
        </>
    )
}