import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], inputValue: "" };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.filterHandleChange = this.filterHandleChange.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  filterHandleChange(event) {
    this.setState({ ...this.state, inputValue: event.target.value });
  }

  getDataFromApi() {
    fetch(
      `https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json`
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ ...this.state, data: responseData.results });
      });
  }
  render() {
    return (
      <div className="app">
        <header className="header"></header>
        <main className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="home">
                  <Filters
                    inputValue={this.state.inputValue}
                    onChange={(event) => this.filterHandleChange(event)}
                  />
                  <CharacterList
                    data={this.state.data}
                    inputValue={this.state.inputValue}
                  />
                </div>
              )}
            />
            <Route
              path="/character_detail/:id"
              render={(routerProps) => {
                const card = this.state.data.find(
                  (card) => card.id === parseInt(routerProps.match.params.id)
                );
                if (card) {
                  return <CharacterDetail card={card} />;
                } else {
                  return (
                    <span className="error-url">
                      El personaje que buscas no existe
                    </span>
                  );
                }
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
