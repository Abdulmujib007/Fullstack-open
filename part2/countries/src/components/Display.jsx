import React from "react";

const Display = ({ displayedCountry }) => {
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
              <img style={{ width: "3rem" }} key={`img`} src={flag} />
            </>
          )
        )
      ) : displayedCountry.length > 1 && displayedCountry.length <= 10 ? (
        displayedCountry.map(({ flag, name }, valIndex) => (
          <>
            <p key={`names${valIndex}`}>{name}</p>
            <img style={{ width: "3rem" }} key={`img${valIndex}`} src={flag} />
          </>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
