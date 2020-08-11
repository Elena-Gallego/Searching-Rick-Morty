import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.scss";

function CharacterList(props) {
  const filterResults = props.data
    .filter((card) =>
      card.name.toLowerCase().includes(props.inputValue.toLowerCase())
    )
    .filter((card) =>
      card.location.name
        .toLowerCase()
        .includes(props.locationValue.toLowerCase())
    );
  if (filterResults.length > 0) {
    return (
      <ul className="character-list">
        {filterResults
          .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
          .map((card) => (
            <CharacterCard
              image={card.image}
              name={card.name}
              species={card.species}
              key={card.id}
              id={card.id}
            />
          ))}
      </ul>
    );
  } else {
    return (
      <small className="error-message">
        No hay ningún personaje que coincida con la palabra: {props.inputValue}
      </small>
    );
  }
}

export default CharacterList;
CharacterList.propTypes = {
  data: PropTypes.array,
  inputValue: PropTypes.string,
};
