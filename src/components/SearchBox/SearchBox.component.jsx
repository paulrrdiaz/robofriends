import React from "react";

const SearchBox = ({ onChange }) => (
  <div className="mb3">
    <input
      aria-label="Search robots"
      className="ba h3 ph3"
      onChange={onChange}
      type="text"
    />
  </div>
);
export default SearchBox;
