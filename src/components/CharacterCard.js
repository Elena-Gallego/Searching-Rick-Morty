import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="card">
      <Link to={`/character_detail/${props.id}`}>
        <img className="card-image" src={props.image} alt="" />
        <h2 className="card-name">{props.name}</h2>
        <span className="card-specie">
          {props.species === "Human"
            ? props.gender === "Male"
              ? "🙍🏿‍♂️"
              : "👩🏽‍💼"
            : "👽"}
        </span>
      </Link>
    </li>
  );
}
export default CharacterCard;
