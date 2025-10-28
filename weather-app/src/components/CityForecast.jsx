//City Forecast 
import weatherData from "../mockWeatherData";
import React, {useEffect, useRef, useState} from "react";

function CityForecast({ city, onBack}) {
const [loading, setLoading] = useState(true);
const detailsRef  = useRef();
const [data,setData]=useState(null);


useEffect (() => {
    setData(weatherData[city])
    setTimeout(() => setLoading(false), 1000);

}, [city]);

 const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };
if (loading) return <p>Loading weather for {city}...</p>;

  if (!data)
    return (
      <div>
        <p>No data found for {city}.</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
return (
<div>
      <h2><strong>{city}</strong></h2>
      <p><strong>{data.summary}</strong></p>
      <button onClick={scrollToDetails}>View Details</button>
      <button onClick={onBack} style={{ marginLeft: "10px" }}>
        Back
      </button>

          <div ref={detailsRef} style={{ marginTop: "20px" }}>
        <p>{data.details}</p>
      </div>
    </div>
)
}
export default CityForecast;
