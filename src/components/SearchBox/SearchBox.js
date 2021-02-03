import React from "react";
import classes from "./SearchBox.module.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className={classes.SearchBox}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
