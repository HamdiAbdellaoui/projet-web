import React, { Fragment, useContext, useState, useEffect } from "react";
import { UserContext } from "./index";
import { editUser, getAllUser } from "./FetchApi";

const EditUserModal = (props) => {
  const { data, dispatch } = useContext(UserContext);

  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  const [cId, setCid] = useState("");

  useEffect(() => {
    setDes(data.editUserModal.des);
    setStatus(data.editUserModal.status);
    setCid(data.editUserModal.cId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.editUserModal.modal]);

  const fetchData = async () => {
    let responseData = await getAllUser();
    if (responseData.Users) {
      dispatch({
        type: "fetchUserAndChangeState",
        payload: responseData.Users,
      });
    }
  };

  const submitForm = async () => {
    dispatch({ type: "loading", payload: true });
    let edit = await editUser(cId, des, status);
    if (edit.error) {
      console.log(edit.error);
      dispatch({ type: "loading", payload: false });
    } else if (edit.success) {
      console.log(edit.success);
      dispatch({ type: "editUserModalClose" });
      setTimeout(() => {
        fetchData();
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "editUserModalClose" })}
        className={`${
          data.editUserModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editUserModal.modal ? "" : "hidden"
        } fixed inset-0 m-4  flex items-center z-30 justify-center`}
      >
        <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Add User
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "editUserModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="description">User Description</label>
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              name="description"
              id="description"
              cols={5}
              rows={5}
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="status">User Status</label>
            <select
              value={status}
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              id="status"
            >
              <option name="status" value="Active">
                Active
              </option>
              <option name="status" value="Disabled">
                Disabled
              </option>
            </select>
          </div>
          <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
            <button
              style={{ background: "#303031" }}
              onClick={(e) => submitForm()}
              className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
            >
              Create user
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUserModal;
