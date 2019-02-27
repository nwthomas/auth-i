import React from "react";
import styled from "styled-components";
import { LoginForm } from "../../presentational/LoginForm";
import { connect } from "react-redux";

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

const mapStateToProps = props => ({});

const mapActionsToProps = {};

export default connect(
  null,
  {}
)(LoginView);
