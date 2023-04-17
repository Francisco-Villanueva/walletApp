import axios from "axios";
export const actionTypes = {
  GET_USERS: "GET_USERS",
};
export const getUser = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/users");
    console.log("entroe el getUsers() ", res.data);
    dispatch({
      type: actionTypes.GET_USERS,
      payload: res.data,
    });
  };
};

export const createUser = (user) => {
  return async function () {
    const res = await axios.post("http://localhost:4000/users", user);
    console.log("entroe el createUser() ", res.data);

    return res;
  };
};
