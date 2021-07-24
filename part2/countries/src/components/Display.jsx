import React, { useState,useEffect } from "react";
import Button from "./Button";
import axios from 'axios'

const Display = ({ displayedCountry }) => {
  const [weatherData , setWeatherData] = useState([])
  const [imgs, setImages] = useState(null);


  useEffect(() => {
    if (displayedCountry.length ===1){

    const namesCount = displayedCountry[0].name
    console.log(namesCount)
    console.log("one country")   
    axios.get(`http://api.weatherstack.com/current?access_key=7ac8f956d8a79ea57845f0bc79c125a6&query=${namesCount}`)
    .then(({data}) =>  setWeatherData(weatherData.concat(data)))
    .catch( err =>console.error(err))
    }
    setWeatherData([])

    
  }, [displayedCountry])


  const handleShow = (displayedCountryIndex) => {
    if(imgs !== null) {

      axios.get(`http://api.weatherstack.com/current?access_key=7ac8f956d8a79ea57845f0bc79c125a6&query=${displayedCountry[imgs].name}`)
      .then(({data}) => setWeatherData(weatherData.concat(data)) )
      .catch(err => console.error(err))
    }
    setWeatherData([])

    displayedCountryIndex !== imgs
      ? setImages(displayedCountryIndex)
      : setImages(null);
  };

  return (
    <div>
      
      {displayedCountry.length > 10 ? (
        <p>Too many matches,specify another filter</p>
      ) : displayedCountry.length === 1 ? (
        
          displayedCountry.map(
          ({ name, flag, languages, population, capital }) => (
            <>
              <h3 key={`header`}>{name}</h3>
              <span key={`span1`}>capital {capital}</span> <br />
              <span key="span2">population {population}</span>
              {/* <p>{weatherData.current}</p> */}
              <h3>languages</h3>
              <ul>
                {languages.map((value, index) => (
                  <li key={`${value}${index}`}> {value.name}</li>
                ))}
              </ul>
              <img style={{ width: "10rem" }} key={`img`} src={flag} />
              {/* {JSON.stringify(weatherData, null, 2)} */}
              {/* {JSON.stringify({length:weatherData}, null, 2)} */}
              {
                weatherData.length && (
                  <div>
                      <p key={`weather${imgs}1`}>Weather in {weatherData[0].location.name}</p>
                      <p key={`weather${imgs}2`}>temperature:{weatherData[0].current.temperature}</p>
                      <img key={`weather${imgs}3`} style={{width:'5rem'}} src={weatherData[0].current.weather_icons[0]}/>
                      <p key={`weather${imgs}4`}>wind:{weatherData[0].current.wind_speed}mph direction{weatherData [0].current.wind_dir}</p>
                  </div>
                )
              }
            </>
          )
        )
      ) : displayedCountry.length > 1 && displayedCountry.length <= 10 ? (
        displayedCountry.map(({ flag, name }, valIndex) => (
          <>
             <p key={`names${valIndex}`}>
              {name}
              <Button
                handleShow={handleShow}
                singleindex={valIndex}
                text={imgs !== null && valIndex === imgs ? "hide" : "show"}
              />
            </p>
            {valIndex === imgs ? (
              <>
                <span key={`span11`}>
                  capital {displayedCountry[imgs].capital}
                </span>{" "}
                <br />
                <span key="span22">
                  population {displayedCountry[imgs].population}
                </span>
                <h3>languages</h3>
                <ul>
                  {displayedCountry[imgs].languages.map((value, index) => (
                    <li key={`${value}${index}1`}> {value.name}</li>
                  ))}
                </ul>
                <img
                  style={{ width: "10rem" }}
                  key={`imgs`}
                  src={displayedCountry[imgs].flag}
                />
                {
                  weatherData.length  ? (
                    
                    <div>
                      <p key={`weather${imgs}0`}>Weather in {weatherData[0].location.name}</p>
                      <p key={`weather${imgs}1`}>temperature:{weatherData[0].current.temperature}</p>
                      <img key={`weather${imgs}2`} style={{width:'5rem'}} src={weatherData[0].current.weather_icons[0]}/>
                      <p key={`weather${imgs}3`}>wind:{weatherData[0].current.wind_speed}mph direction {weatherData[0].current.wind_dir}</p>
                    </div>
                  )
                  : ''
                }
              </>
            ) : (
              ""
            )}
          </>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
