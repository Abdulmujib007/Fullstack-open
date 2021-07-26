import React from "react";

const Persons = ({ searchBy, persons, handleDelete }) => {
  return (
    <ul>
      {searchBy
        ? persons
            .filter((value) =>
              value.name.toLowerCase().includes(searchBy.toLowerCase())
            )
            .map((value, valIndex) => (
              <li key={valIndex} style={{ listStyle: "none" }}>
                {value.name} {value.number}{" "}
                {<button onClick={() => handleDelete(value.id)}>delete</button>}
              </li>
            ))
        : persons.map((value, valIndex) => (
            <li key={valIndex} style={{ listStyle: "none", marginTop: "1rem" }}>
              {value.name} {value.number}{" "}
              {<button onClick={() => handleDelete(value.id)}>delete</button>}
            </li>
          ))}
    </ul>
  );
};
export default Persons;
