import React from 'react' 
import { Button } from "reactstrap";
import { connect } from 'react-redux'
import { toggleLogin } from '../../redux/actions/authActions'
import { sendLogin } from '../../utils/API'

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			email : '',
			password : ''
		}
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
		this.handleLoginChange = this.handleLoginChange.bind(this)
	}
	handleLoginChange(e){
		let { name, value } = e.target
		this.setState({
			...this.state,
			[name]: value
		})
	}
	handleLoginSubmit(e){
		e.preventDefault()
		sendLogin(this.state)
		this.setState({
			...this.state,
			email : '',
			password :  "",
		})
	}
	render(){
		return(
			<React.Fragment >
				<form className="login_modal" onSubmit={this.handleLoginSubmit}>
					<input className="input_text" type="text" name="email" value={this.state.email} onChange={this.handleLoginChange} placeholder="email" required/>
					<br />
					<input className="input_text" type="text" name="password" value={this.state.password} onChange={this.handleLoginChange} placeholder="password" required/>
					<br />
					<Button type="submit">Login</Button>
					<br />
					<Button onClick={this.props.toggleLogin}>Register</Button>
				</form>
			</React.Fragment>
		);
	};
};

const mapDispatchToProps = (dispatch) =>{
	return {
		toggleLogin : ()=>dispatch(toggleLogin()),
	};
};

const mapStateToProps = (state) => {
	return {
		state,
		isAuthorized: state.auth.isAuthorized,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)