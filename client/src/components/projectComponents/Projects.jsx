import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toggleProfile } from "../../redux/actions/userAction";
import { Container, Jumbotron } from "reactstrap";

class Projects extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron fluid>
            <h1 className="display-4 center">React Projects</h1>
            <p className="center">Welcome to the REACT Project area.</p>
            <ul className="center display-5">
              <li>
                <Link to="/quotebox">QuoteBox</Link>
              </li>
            </ul>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    profileModal: state.user.profileModal,
    id: state.user.id,
    message: state.user.message,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    date_member_joined: state.user.date_member_joined,
    time_as_member: state.user.time_as_member,
    loggedIn: state.user.loggedIn,
    isAuthorized: state.user.isAuthorized,
    address1: state.user.address1,
    address2: state.user.address2,
    city: state.user.city,
    State: state.user.State,
    zipCode: state.user.zipCode,
    privacy: state.user.privacy,
    membership_status: state.user.membership_status,
    membership_role: state.user.membership_role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProfile: () => dispatch(toggleProfile()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Projects));
