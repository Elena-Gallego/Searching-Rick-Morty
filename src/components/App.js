import React from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], inputValue: "" };
    this.getDataFromApi = this.getDataFromApi.bind.this;
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    fetch(`https://rickandmortyapi.com/documentation/#get-all-characters`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ ...this.state, data: responseData });
      });
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
