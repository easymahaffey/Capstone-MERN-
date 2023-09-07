import { GET_USER, TOGGLE_PROFILE, TOGGLE_PASSWORD, TOGGLE_DELETE } from "../types";

const initialState = {
  id: "", 
	/// required
  firstName: "",
  lastName: "",
  email: "",
  password: "",
	/// not required
  date_member_joined: "",
  isAuthorized: "",
  address1: "",
  address2: "",
	/// required
  city: "",
  State: "",
	/// not required
  zipCode: "",
  profileModal : false,
  passwordModal : false,
	message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
	case GET_USER:
	  return {
		...state,
		/// required
		id: action.payload._id,
		firstName: action.payload.firstName,
		lastName: action.payload.lastName,
		email: action.payload.email,
		password: action.payload.password,
		/// not required
		date_member_joined: action.payload.date_member_joined,
		isAuthorized: action.payload.isAuthorized,
		address1: action.payload.address1,
		address2: action.payload.address2,
		/// required
		city: action.payload.city,
		State: action.payload.State,
		/// not required
		zipCode: action.payload.zipCode,
		message: action.payload.message,
	  };
	case TOGGLE_PROFILE:
		return {
			...state,
			profileModal : !state.profileModal,
		};
	case TOGGLE_PASSWORD:
		return {
			...state,
			passwordModal : !state.passwordModal,
		};
	case TOGGLE_DELETE:
		return {
			...state,
			deleteModal : !state.deleteModal,
		};
	default:
	  return state;
  };
};

export default userReducer;
