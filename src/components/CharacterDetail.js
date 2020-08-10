import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
function CharacterDetail(props) {
  return (
    <section className="character-detail">
      <Link className="return-home" to="/">
        {" "}
        Volver{" "}
      </Link>
      <article className="detail-card">
        <img className="detail-image" src={props.card.image} alt="detail" />
        <h2 className="detail-name">{props.card.name}</h2>
        <div className="detail-data">
          <span className="detail-status">
            <strong>Status: </strong>
            {props.card.status}
            {props.card.status === "Dead" ? " 💀" : ""}
          </span>
          <span className="detail-specie">
            <strong>Species: </strong>
            {props.card.species}
            {props.card.species === "Human"
              ? props.card.gender === "Male"
                ? " 🙍🏿‍♂️"
                : " 👩🏽‍💼"
              : " 👽"}
          </span>
          <span className="detail-planet">
            <strong>Origin: </strong>
            {props.card.origin.name}
          </span>
          <span className="detail-episode">
            {" "}
            <strong>Episodes: </strong>
            {props.card.episode.length}
          </span>
        </div>
      </article>
    </section>
  );
}
export default CharacterDetail;
CharacterDetail.propTypes = {
  card: PropTypes.object,
};
