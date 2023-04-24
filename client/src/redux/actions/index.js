import axios from "axios";
import Swal from "sweetalert2";
export const actionTypes = {
  GET_USERS: "GET_USERS",
  GET_SPENTS: "GET_SPENTS",
  GET_SPENTS_BY_TYPES: "GET_SPENTS_BY_TYPES",
  DELETE_SPENTS: "DELETE_SPENTS",
  SET_USER_ACTUAL: "SET_USER_ACTUAL",
  GET_WALLETS: "GET_WALLETS",
  GET_USER_DATA: "GET_USER_DATA",
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

export const getUserById = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:4000/users/${id}`);
      console.log("entroe el getUserById() ", res);

      return dispatch({
        type: actionTypes.GET_USER_DATA,
        payload: res.data,
      });
    } catch (error) {
      console.log("entroe el getUserById() ", error);
      throw new Error(error);
    }
  };
};

export const setUserActual = (user) => {
  console.log("entroe el setUserActual() ", user);
  return {
    type: actionTypes.SET_USER_ACTUAL,
    payload: user,
  };
};

export const createUser = (user) => {
  return async function () {
    const res = await axios.post("http://localhost:4000/users", user);
    console.log("entroe el createUser() ", res.data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "User created successfully",
      showConfirmButton: false,
      timer: 500,
    });
    return res;
  };
};

export const getAllSpents = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/spent");
    console.log("entro al getAllSpents() ", res.data);
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
    try {
      const res = await axios.post("http://localhost:4000/spent", spent);
      console.log("entroe el createSpent() ", res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Spent created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      return res;
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error creating spent",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};

export const deleteSpent = (id) => {
  return async function () {
    try {
      await axios.delete(`http://localhost:4000/spent/${id}`);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Spent deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      return {
        type: actionTypes.DELETE_SPENTS,
        payload: id,
      };
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error at deleting spent",
        showConfirmButton: false,
        timer: 1500,
      });
      throw new Error(error);
    }
  };
};

export const getSpentsByTypes = (type) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:4000/types`);
      console.log("entroe el getSpentsByTypes() ", res.data);

      return dispatch({
        type: actionTypes.GET_SPENTS_BY_TYPES,
        payload: res.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const getWallets = () => {
  return async function (dispatch) {
    try {
      const resp = await axios.get(`http://localhost:4000/wallet`);

      return dispatch({
        type: actionTypes.GET_WALLETS,
        payload: resp.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createWallet = (wallet) => {
  return async function () {
    try {
      const res = await axios.post("http://localhost:4000/wallet", wallet);

      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: "Wallet created successfully",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      return res;
    } catch (error) {
      throw new Error(error);
    }
  };
};
