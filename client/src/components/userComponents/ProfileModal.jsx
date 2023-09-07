import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { toggleProfile, togglePassword, toggleDelete } from "../../redux/actions/userAction";
import PasswordModal from "./PasswordModal";
import DeleteModal from "./DeleteModal";
import { updateProfile } from "../../utils/API";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      State: "",
      zipCode: "",
      privacy: "",
      membership_status: "",
      membership_role: "",
    };
    // this.state = {
    //   firstName: this.props.firstName,
    //   lastName: this.props.lastName,
    //   email: this.props.email,
    //   // password1: this.props.,
    //   // password2: this.props.,
    //   address1: this.props.address1,
    //   address2: this.props.address2,
    //   city: this.props.city,
    //   State: this.props.State,
    //   zipCode: this.props.zipCode,
    //   privacy: this.props.privacy,
    //   membership_status: this.props.membership_status,
    //   membership_role: this.props.membership_role,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.validatePassword = this.validatePassword.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleSubmit() {
    updateProfile(this.state);
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="profile_modal">
          <button className="CloseBtn" onClick={this.props.toggleProfile}>
            &times;
          </button>
          <br />

          <div className="delete_modal">
            {console.log("DELETE MODAL STATE I ", this.props.deleteModal)}
            {this.props.deleteModal ? (
              <DeleteModal />
            ) : (
              <Button onClick={this.props.toggleDelete}>
                Delete Profile
              </Button>
            )}
          </div>
          <br />
          
          <div className="password_modal">
            {console.log("PASSWORD MODAL STATE I ", this.props.passwordModal)}
            {this.props.passwordModal ? (
              <PasswordModal />
            ) : (
              <Button onClick={this.props.togglePassword}>
                Change Password
              </Button>
            )}
          </div>
          <br />

          <form className="profile_modal" onSubmit={this.handleSubmit}>
          <input
            readOnly={true}
            type="text"
            name="id"
            value={this.props.id}
            hidden
          />
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <label htmlFor="firstName">{this.props.firstName}</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
            <label htmlFor="lastName">{this.props.lastName}</label>
            <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <label htmlFor="email">{this.props.email}</label>
            <br />
            <input
              type="text"
              name="address1"
              value={this.state.address1}
              onChange={this.handleChange}
              placeholder="Address 1"
            />
            <label htmlFor="address1">{this.props.address1}</label>
            <br />
            <input
              type="text"
              name="address2"
              value={this.state.address2}
              onChange={this.handleChange}
              placeholder="Address 2"
            />
            <label htmlFor="address2">{this.props.address2}</label>
            <br />
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              placeholder="City"
            />
            <label htmlFor="city">{this.props.city}</label>
            <br />
            <input
              type="text"
              name="State"
              value={this.state.State}
              onChange={this.handleChange}
              placeholder="State"
            />
            <label htmlFor="State">{this.props.State}</label>
            <br />
            <input
              type="text"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
              placeholder="Zip Code"
            />
            <label htmlFor="zipCode">{this.props.zipCode}</label>
            <br />
            <Button type="submit">Submit Profile</Button>
          </form>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProfile: () => dispatch(toggleProfile()),
    togglePassword: () => dispatch(togglePassword()),
    toggleDelete: () => dispatch(toggleDelete()),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
    profileModal: state.user.profileModal,
    passwordModal: state.user.passwordModal,
    deleteModal: state.user.deleteModal,
    id: state.user.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
