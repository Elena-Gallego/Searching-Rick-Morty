import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="card">
      <Link to={`/character_detail/${props.id}`}>
        <img className="image" src={props.image} alt="" />
        <h2 className="name">{props.name}</h2>
        <span className="specie">{props.species}</span>
      </Link>
    </li>
  );
}
export default CharacterCard;
