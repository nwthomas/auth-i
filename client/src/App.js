import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { LoginView } from "./components/views/LoginView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <LoginView />} />
      </div>
    );
  }
}

export default App;
