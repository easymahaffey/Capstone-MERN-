import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { toggleLogin } from "../../redux/actions/authActions";
import { sendRegister } from "../../utils/API";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      address1: "",
      address2: "",
      city: "",
      State: "",
      zipCode: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  validatePassword(e) {
    e.preventDefault();
    let testPassword = /\d+[!@#$%^&*()]+/g;
    this.state.password1.length < 6
      ? alert(
          "PASSWORD NEEDS TO BE AT LEAST 6 CHARACTERS ALONG WITH ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        )
      : testPassword.test(this.state.password1)
      ? this.handleSubmit()
      : alert(
          "PASSWORD NEEDS ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        );
  }

  handleSubmit() {
    sendRegister(this.state);
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="login_modal" onSubmit={this.validatePassword}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name *"
            required
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name *"
            required
          />
          <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email *"
            required
          />
          <br />
          <input
            type="text"
            name="password1"
            value={this.state.password1}
            onChange={this.handleChange}
            placeholder="Password *"
            required
          />
          <br />
          <input
            type="text"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            placeholder="Confirm password *"
            required
          />
          <br />
          <input
            type="text"
            name="address1"
            value={this.state.address1}
            onChange={this.handleChange}
            placeholder="Address 1"
          />
          <br />
          <input
            type="text"
            name="address2"
            value={this.state.address2}
            onChange={this.handleChange}
            placeholder="Address 2"
          />
          <br />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City *"
            required
          />
          <br />
          <input
            type="text"
            name="State"
            value={this.state.State}
            onChange={this.handleChange}
            placeholder="State *"
            required
          />
          <br />
          <input
            type="text"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handleChange}
            placeholder="Zip Code"
            required
          />
          <br />
          <p /> * Required
          <br />
          <br />
          <Button type="submit">Register</Button>
          <br />
          <Button onClick={this.props.toggleLogin}>Login</Button>
        </form>
        <br />
      </React.Fragment>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLogin: () => dispatch(toggleLogin()),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
