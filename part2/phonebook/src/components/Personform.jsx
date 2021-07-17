import React from "react";

const Personform = ({
  addName,
  newName,
  handleNameChange,
  number,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
        name: <input required value={newName} onChange={handleNameChange} />
        <br />
        number: <input required value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button style={{ marginTop: "5px" }} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default Personform;
