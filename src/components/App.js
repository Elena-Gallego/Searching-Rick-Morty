import React from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], inputValue: "" };
  }
  render() {
    return (
      <div>
        <CharacterList />
      </div>
    );
  }
}

export default App;
