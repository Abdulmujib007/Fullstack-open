import axios from "axios";
import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";

const App = () => {
  const [country, setCountry] = useState([]);
  const [displayedCountry, setDisplayedCountry] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      setCountry(data);
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
  };

  return (
    <div>
      <Input displayedCountry={change} handleInputChange={handleInputChange} />
      <Display displayedCountry={displayedCountry} />
    </div>
  );
};

export default App;
