import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { LoginView } from "./components/views/LoginView";
import { connect } from "react-redux";
import { HomeView } from "./components/views/HomeView";

class App extends Component {
  render() {
    return (
      <div className="App">
        {!this.props.loggedIn && (
          <Route path="/" render={props => <LoginView {...props} />} />
        )}
        {this.props.loggedIn && (
          <Route path="/" render={props => <HomeView {...props} />} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
