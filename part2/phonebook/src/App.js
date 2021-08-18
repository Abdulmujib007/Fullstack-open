import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Personform from "./components/Personform";
import Persons from "./components/Persons";
import personAdditions from "./components/additions";
import Notification  from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [errorMessage,setErrorMessage] = useState('')

  useEffect(() => {
    personAdditions
      .getAll()
      .then((initalPersons) => setPersons(initalPersons))
      .catch((err) => console.error(err));
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleSearchChange = (e) => setSearchBy(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);

  const newContent = { name: newName, number: number };

  const addName = (e) => {
    e.preventDefault();
    const compare = persons.filter(
      (value) =>
        value.name.toLocaleLowerCase() === newContent.name.toLocaleLowerCase()
    )
    compare.length ? (
      <>
        {window.confirm("This name already exist,replace the old number") ===
        true
          ? personAdditions.update(compare[0].id, newContent).then((value) => {
              setPersons(
                persons.map((item) =>
                  item.id !== compare[0].id ? item : value
                )
              );
            })
            .catch(err => {
               if(err.response.data) setErrorMessage(err.response.data.error)
               else setErrorMessage(`This name was already removed from the server`)
                setTimeout(() => {
                  setErrorMessage('')
                },3000);
            })
          : ""}
      </>
    ) : (
      personAdditions
        .addMore(newContent)
        .then((response) => 
        {
          setPersons(persons.concat(response))
          setErrorMessage(`Added  ${response.name}` 
          )
          setTimeout(() => {
             setErrorMessage('')
          }, 3000);
        })
        .catch(error => {
          console.log(error.response.data.error,typeof error.response.data.error)
          setErrorMessage(error.response.data.error)
          setTimeout(() => {
            setErrorMessage('')
         }, 3000);
        })
    );
    setNewName("");
    setNumber("");
  };
  const handleDelete = (uniqueid) => {
    if (
      window.confirm(
        `Delete ${persons.filter(({ id }) => uniqueid === id)[0].name}`
      ) === true
    ) {
      personAdditions.deletePerson(uniqueid).then((deletedVal) => {
        setPersons(persons.filter(({ id }) => id !== uniqueid));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {errorMessage}/>
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
      <Persons
        searchBy={searchBy}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
