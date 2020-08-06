import React from "react";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="card">
      <img className="image" src={props.image} alt="card" />
      <h2 className="name">{props.name}</h2>
      <span className="specie">{props.species}</span>
    </li>
  );
}
export default CharacterCard;
