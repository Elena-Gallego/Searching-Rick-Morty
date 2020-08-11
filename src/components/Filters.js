import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

function Filters(props) {
  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
      {" "}
      {/*manejador de evento para que no se haga un submit al hacer intro*/}
      <input
        className="filter-input"
        type="text"
        id="filterName"
        placeholder=" 🔎  Search characters name..."
        value={props.inputValue}
        onChange={props.onChange}
      />
      <input
        className="filter-location"
        type="text"
        id="filter-name"
        placeholder="write location"
        value={props.locationValue}
        onChange={props.onChangeLocation}
      />
    </form>
  );
}

export default Filters;
Filters.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};
