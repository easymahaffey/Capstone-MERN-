import axios from "axios";
import store from "../redux/store";
import { authorize } from "../redux/actions/authActions";
import { getuser } from "../redux/actions/userAction";

const baseUrl = "http://localhost:8080";

export const sendLogin = async (loginMember) => {
  await axios.post(baseUrl + "/loginMember", loginMember).then((res) => {
    store.dispatch(getuser(res.data));
    store.dispatch(authorize(res.data));
  });
};

export const sendRegister = async (registerMember) => {
  await axios.post(baseUrl + "/registerMember", registerMember).then((res) => {
    store.dispatch(getuser(res.data));
    store.dispatch(authorize(res.data));
  });
  await axios.post(baseUrl + "/loginMember", registerMember).then((res) => {
    store.dispatch(getuser(res.data));
    store.dispatch(authorize(res.data));
  });
};

export const updateProfile = async (updateMemberProfile) => {
  await axios
    .post(baseUrl + "/updateMemberProfile", updateMemberProfile)
    .then((res) => {
      store.dispatch(authorize(res.data));
      store.dispatch(getuser(res.data));
    });
};

export const updatePassword = async (updateMemberPassword) => {
  await axios
    .post(baseUrl + "/updateMemberPassword", updateMemberPassword)
    .then((res) => {
      store.dispatch(authorize(res.data));
      store.dispatch(getuser(res.data));
    });
};

export const deleteProfile = async (deleteMember) => {
  await axios
		.post(baseUrl + "/deleteMember", deleteMember)
		.then((res) => {
			store.dispatch(authorize(res.data));
			store.dispatch(getuser(res.data));
  	});
};
