import React from "react";
import { connect } from "react-redux";
import { toggleProfile } from "../../redux/actions/userAction";
import ProfileModal from "../userComponents/ProfileModal";
import { Container, Jumbotron, Button } from "reactstrap";

class FinalLandingPage extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron fluid>
            <h1 className="display-4">Welcome  {this.props.firstName} {" "}{this.props.lastName}</h1>
            <h2>To Your Secure Landing Page</h2>
            <h4 className="display-6">Your ID is {this.props.id}.</h4>
            <p className="lead">
              We see you live in {this.props.city}, {" "}{this.props.State}.
            </p>
            <p> 
              Welcome to our site. 
            </p>
            <p>
							{this.props.message}
						</p>
            <div className="landing_modal">
            {this.props.profileModal ? (
							<ProfileModal />
						) : (
							<Button onClick={this.props.toggleProfile}>Edit Profile</Button>
						)}
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(FinalLandingPage);
