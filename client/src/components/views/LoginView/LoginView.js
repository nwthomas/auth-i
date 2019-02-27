import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LoginForm } from "../../presentational/LoginForm";

const LoginWrapper = styled.div`
  width: 100%;
`;

const LoginView = props => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

LoginView.propTypes = {};

export default LoginView;
