import React from "react";

const Filter = ({ searchBy, handleSearchChange }) => {
  return (
    <div>
      <span>filter shown with </span>{" "}
      <input value={searchBy} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
