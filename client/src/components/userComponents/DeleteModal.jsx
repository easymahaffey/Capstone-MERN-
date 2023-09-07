import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { toggleDelete } from "../../redux/actions/userAction";
import { deleteProfile } from "../../utils/API";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleSubmit() {
    deleteProfile(this.state);
    this.setState({
      ...this.state,
      id: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.props.toggleDelete}>
          Cancel Delete
        </Button>
        <br />
        <form className="delete_modal" onSubmit={this.handleSubmit}>
          <input
            readOnly={true}
            type="text"
            name="id"
            value={this.props.id}
            hidden
          />
          <br />
          <Button type="submit">Confirm profile delete</Button>
        </form>
        <br />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDelete: () => dispatch(toggleDelete()),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
    DeleteModal: state.user.DeleteModal,
    id: state.user.id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
