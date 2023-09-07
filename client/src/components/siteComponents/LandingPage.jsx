import React from "react";
import { connect } from "react-redux";
import { toggleModal } from '../../redux/actions/authActions'
import Modal from "../authComponents/Modal";
import { Container, Jumbotron, Button } from "reactstrap";

const LandingPage = (props) => {
		return (
			<div>
				<Container fluid>
					<Jumbotron fluid className="Jumbotron">
						<h1 className="display-4">Unsecure Landing Page</h1>
						<h2>Welcome to the website.</h2>
						<p className="lead">Please login or register to enter</p>
						<p>
							{props.message}
						</p>
						<div className="landing_modal">
							{props.isModal ? (
							<Modal />
						) : (
							<Button onClick={props.toggleModal}>Login</Button>
						)}
						</div>
					</Jumbotron>
				</Container>
			</div>
		);
};

const mapStateToProps = (state) => {
	return {
		isModal: state.auth.isModal,
		isAuthorized: state.auth.isAuthorized,
		message: state.user.message
	};
};

const mapDispatchToProps = (dispatch) =>{
	return {
			toggleModal: () => dispatch(toggleModal()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
