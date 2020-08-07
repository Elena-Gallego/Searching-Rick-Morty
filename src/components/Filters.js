import React from "react";

function Filters(props) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {" "}
      {/*manejador de evento para que mp se haga un submit al hacer intro*/}
      <input
        type="text"
        id="filterName"
        value={props.inputValue}
        onChange={props.onChange}
      />
    </form>
  );
}

export default Filters;
