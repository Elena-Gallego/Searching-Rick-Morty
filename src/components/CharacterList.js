import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.scss";

function CharacterList(props) {
  return (
    <ul>
      {props.data
        .filter((card) =>
          card.name.toLowerCase().includes(props.inputValue.toLowerCase())
        )
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
}

export default CharacterList;
