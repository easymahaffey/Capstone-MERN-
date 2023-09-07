import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/authActions";
import Login from "./Login";
import Registration from "./Registration";

const Modal = (props) => {
  return (
    <div className="login_modal">
        <button className="CloseBtn" onClick={props.toggleModal}>&times;</button>
				<br />
        {props.isLogin ? <Login /> : <Registration />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModal()),
  };
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
