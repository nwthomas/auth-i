import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../../../store/actions";

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 50px 5%;
  margin: 20vh auto 0;
  -webkit-box-shadow: 0px 4px 55px 5px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 4px 55px 5px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 4px 55px 5px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      height: 40px;
      padding: 0 2%;
      margin-bottom: 35px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border: 1px solid lightgrey;
      font-size: 16px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      button {
        height: 40px;
        width: 47%;
        background: #5a22db;
        font-size: 16px;
        color: white;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  startLogin = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <FormContainer>
        <h1>Please Login</h1>
        <form onSubmit={this.startLogin}>
          <input
            required
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            required
            autoComplete="off"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={this.clearForm}>
              Clear
            </button>
          </div>
        </form>
      </FormContainer>
    );
  }
}

const mapActionsToProps = {
  login
};

export default connect(
  null,
  mapActionsToProps
)(LoginForm);

// axios.defaults.withCredentials = true;
