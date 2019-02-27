import React, { Component } from "react";
import styled from "styled-components";

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
  render() {
    return (
      <FormContainer>
        <h1>Please Login</h1>
        <form>
          <input
            required
            autocomplete="off"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            placeholder="Username"
          />
          <input
            required
            autocomplete="off"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            placeholder="Password"
          />
          <div>
            <button>Submit</button>
            <button>Cancel</button>
          </div>
        </form>
      </FormContainer>
    );
  }
}

export default LoginForm;
