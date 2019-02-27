import React from "react";
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

export default LoginView;
