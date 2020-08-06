import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.scss";

function CharacterList(props) {
  return <ul>{<CharacterCard />}</ul>;
}

export default CharacterList;
