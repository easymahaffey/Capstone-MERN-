import { AUTHORIZE, TOGGLE_LOGIN, TOGGLE_MODAL } from "../types";

const initialState = {
  isModal: false,
  isLogin: true,
  isAuthorized: false,
  id: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModal: !state.isModal,
        isLogin: true,
      };
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case AUTHORIZE:
      return {
        ...state,
        isAuthorized: action.payload.isAuthorized,
        id: action.payload._id,
      };
    default:
      return state;
  };
};

export default authReducer;
