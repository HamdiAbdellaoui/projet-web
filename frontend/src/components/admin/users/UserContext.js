export const userState = {
  users: [],
  addUserModal: false,
  editUserModal: {
    modal: false,
    cId: null,
    des: "",
    status: "",
  },
  loading: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    /* Get all user */
    case "fetchUserAndChangeState":
      return {
        ...state,
        users: action.payload,
      };
    /* Create a user */
    case "addUserModal":
      return {
        ...state,
        addUserModal: action.payload,
      };
    /* Edit a user */
    case "editUserModalOpen":
      return {
        ...state,
        editUserModal: {
          modal: true,
          cId: action.cId,
          des: action.des,
          status: action.status,
        },
      };
    case "editUserModalClose":
      return {
        ...state,
        editUserModal: {
          modal: false,
          cId: null,
          des: "",
          status: "",
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
