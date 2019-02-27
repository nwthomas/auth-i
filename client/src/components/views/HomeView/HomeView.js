import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions";

const HomeView = props => {
  const logout = e => {
    e.preventDefault();
    props.logout();
  };
  return (
    <div>
      <p>You're logged in!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const mapActionsToProps = {
  logout
};

export default connect(
  null,
  mapActionsToProps
)(HomeView);
