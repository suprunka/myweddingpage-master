import * as types from "../constrainsts";
import axios from "axios";
export const setPageSize = (pageSize) => {
  return (dispatch) => {
    dispatch({ type: types.SET_PAGE_SIZE, size: pageSize });
  };
};

export const setPageNumber = (pageNumber) => {
  return (dispatch) => {
    dispatch({ type: types.SET_PAGE_NUMBER, number: pageNumber });
  };
};

export const addMessage = (request) => {
  return (dispatch) => {
    dispatch({ type: types.POST_MESSAGE_REQUEST });
    axios
      .post("https://szalone-wesele-api.herokuapp.com/messages", request, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          ApiKey: process.env.REACT_APP_APIKEY,
        },
      })
      .then(function (response) {
        dispatch({ type: types.POST_MESSAGE_SUCCESS });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: types.POST_MESSAGE_SUCCESS });
      });
  };
};
export const cleanMessageStatus = () => {
  return (dispatch) => {
    dispatch({ type: types.MESSAGE_STATUS_CLEAN });
  };
};
