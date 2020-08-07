import React from "react";
import { Link } from "react-router-dom";
function CharacterDetail(props) {
  return (
    <section>
      <Link className="return-home" to="/">
        {" "}
        Volver{" "}
      </Link>
      <article>
        <img className="image" src={props.card.image} alt="detail" />
        <h2 className="name">{props.card.name}</h2>
        <span className="status">Status:{props.card.status}</span>
        <span className="specie">Species: {props.card.species}</span>
        <span className="planet">Origin: {props.card.origin.name}</span>
        <span className="episode"> Episodes: {props.card.episode.length}</span>
      </article>
    </section>
  );
}
export default CharacterDetail;
