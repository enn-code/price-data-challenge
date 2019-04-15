import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store/config.store";
import Home from "./views/home.view";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
