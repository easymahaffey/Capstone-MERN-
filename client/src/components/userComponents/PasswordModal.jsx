import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { togglePassword } from "../../redux/actions/userAction";
import { updatePassword } from "../../utils/API";

class PasswordModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password1: "",     
      password2: "",    
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
          "PASSWORD NEEDS TO BE AT LEAST 6 CHARACTERS LONG WITH ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        )
      : testPassword.test(this.state.password1)
      ? this.handleSubmit()
      : alert(
          "PASSWORD NEEDS ONE OR MORE NUMBERS AND ONE OR MORE SPECIAL CHARACTERS (!@#$%^&*())."
        );
  }

  handleSubmit() {
    updatePassword(this.state);
    this.setState({
      ...this.state,
      // email: "",
      password1: "",
      password2: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <button className="CloseBtn" onClick={this.props.togglePassword}>&times;</button>
				<br />
        <form className="password_modal" onSubmit={this.validatePassword}>
          <input
            readOnly={true}
            type="text"
            name="email"
            value={this.props.email}
            hidden
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
          <p /> * Required
          <br />
          <br />
          <Button type="submit">Submit New Password</Button>
        </form>
        <br />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    togglePassword: () => dispatch(togglePassword()),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
    PasswordModal: state.user.PasswordModal,
    email: state.user.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordModal);
