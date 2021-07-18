import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Personform from "./components/Personform";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    axios.get(" http://localhost:3001/persons").then(({ data }) => {
      setPersons(data);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleSearchChange = (e) => setSearchBy(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);

  const newContent = { name: newName, number: number };

  const addName = (e) => {
    e.preventDefault();
    const compare = persons.some(
      (value) =>
        value.name.toLocaleLowerCase() === newContent.name.toLocaleLowerCase()
    );
    compare === true
      ? alert("This name already exist")
      : setPersons(persons.concat(newContent));
    setNewName("");
    setNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchBy={searchBy} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <Personform
        addName={addName}
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons searchBy={searchBy} persons={persons} />
    </div>
  );
};

export default App;
