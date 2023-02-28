export const actionTypes = {
  GET_USERS: "GET_USERS",
};

export const getUser = () => {
  return {
    type: actionTypes.GET_USERS,
    payload: "user",
  };
};
