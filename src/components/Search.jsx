import React, { useState } from "react";

const Search = ({ onIdChange }) => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onIdChange(value);
    setValue("");
  }

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="search__input"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        placeholder="Search by name or id"
      />

      <input type="submit" value="Go !" className="search__submit" />
    </form>
  );
};

export default Search;
