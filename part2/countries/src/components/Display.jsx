import React, { useState } from "react";
import Button from './Button'

const Display = ({ displayedCountry }) => {

  const [imgs,setImages] = useState(null)

  // let text = 'show'


  const  handleShow = (displayedCountryIndex) => {
    // let texts = 'show'
  // if(texts === 'show'){
  //   text = 'hide'
  //   displayedCountry.map((value,index) => {
  //     if(index === e)  {
  //       setImages(index)
        
  //     } else {
  //       setImages(null)
  //       texts = 'show'
  //     }
  //   })
    
  // }  
  displayedCountryIndex!== imgs? setImages(displayedCountryIndex) : setImages(null)
  }

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
              <h3>languages</h3>
              <ul>
                {languages.map((value, index) => (
                  <li key={`${value}${index}`}> {value.name}</li>
                ))}
              </ul>
              <img style={{ width: "10rem" }} key={`img`} src={flag} />
            </>
          )
        )
      ) : displayedCountry.length > 1 && displayedCountry.length <= 10 ? (
        displayedCountry.map(({ flag, name }, valIndex) => (
          <>
            <p key={`names${valIndex}`}>
              {name}
            <Button handleShow ={handleShow} singleindex={valIndex} text={ (imgs !== null && valIndex === imgs)  ? 'hide' : 'show'}/>
            </p>
             {valIndex === imgs ?  <>
              <span key={`span11`}>capital {displayedCountry[imgs].capital}</span> <br />
              <span key="span22">population {displayedCountry[imgs].population}</span>
              <h3>languages</h3>
              <ul>
                {displayedCountry[imgs].languages.map((value, index) => (
                  <li key={`${value}${index}1`}> {value.name}</li>
                ))}
              </ul>
              <img style={{ width: "10rem" }} key={`imgs`} src={displayedCountry[imgs].flag} />
            </> : ''  }
             
          </>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
