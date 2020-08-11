import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <li className="card">
      <Link to={`/character_detail/${props.id}`}>
        <img className="card-image" src={props.image} alt="" />
        <h2 className="card-name">{props.name}</h2>
        <span className="card-specie">{props.species}</span>
        <span className="card-location">{props.location}</span>
      </Link>
    </li>
  );
}
export default CharacterCard;
CharacterCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
};
