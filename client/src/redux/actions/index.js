import axios from "axios";
export const actionTypes = {
  GET_USERS: "GET_USERS",
  GET_SPENTS: "GET_SPENTS",
  DELETE_SPENTS: "DELETE_SPENTS",
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

export const getAllSpents = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/spent");
    console.log("entroe el getAllSpents() ", res.data);
    dispatch({
      type: actionTypes.GET_SPENTS,
      payload: res.data,
    });
  };
};

export const getSpentById = (id) => {
  return async function () {
    try {
      const res = await axios.get(`http://localhost:4000/spent/${id}`);
      // console.log("entroe el getSpentById() ", res.data);

      return res;
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createSpent = (spent) => {
  return async function () {
    const res = await axios.post("http://localhost:4000/spent", spent);
    console.log("entroe el createSpent() ", res.data);

    return res;
  };
};

export const deleteSpent = (id) => {
  return async function () {
    try {
      await axios.delete(`http://localhost:4000/spent/${id}`);

      return {
        type: actionTypes.DELETE_SPENTS,
        payload: id,
      };
    } catch (error) {
      throw new Error(error);
    }
  };
};
