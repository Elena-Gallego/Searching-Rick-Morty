import React from "react";

function Filters(props) {
  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
      {" "}
      {/*manejador de evento para que no se haga un submit al hacer intro*/}
      <input
        className="filter-input"
        type="text"
        id="filterName"
        value={props.inputValue}
        onChange={props.onChange}
      />
    </form>
  );
}

export default Filters;
