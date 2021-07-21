import axios from "axios";
import React, { useEffect, useState } from "react";
// import Button from "./components/Button";
import Display from "./components/Display";
import Input from "./components/Input";

const App = () => {
  const [country, setCountry] = useState([]);
  const [displayedCountry, setDisplayedCountry] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {

      // console.log(toogleAdded)
      // console.log(data)
      setCountry(data);
      // console.log(country)
    });
  }, []);

  const handleInputChange = (e) => {
    //  setDisplayedCountry(e.target.value)
    setChange(e.target.value);
    setDisplayedCountry(
      country.filter(({ name }) =>
        name.toLowerCase().includes(change.toLocaleLowerCase())
      )
    );
    // console.log(displayedCountry)
  };
  
  return (
    <div>
      <Input displayedCountry={change} handleInputChange={handleInputChange} />
      <Display displayedCountry={displayedCountry}  />
    </div>
  );
};

export default App;
