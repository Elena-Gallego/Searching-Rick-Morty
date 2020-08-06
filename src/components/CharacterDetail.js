import React from "react";
function CharacterDetail(props) {
  return (
    <div>
      <img className="image" src={props.image} alt="detail" />
      <h2 className="name">{props.name}</h2>
      <span className="specie">{props.species}</span>
      <span className="planet">{props.origin.name}</span>
      <span className="episode">{props.episode}</span>
      <span className="status">{props.status}</span>
    </div>
  );
}
export default CharacterDetail;
