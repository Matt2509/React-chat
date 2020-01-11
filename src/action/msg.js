//import websocket from './../services/websocket';
//import React from 'react';

import {ADD_MESSAGE, SUPP_MESSAGE} from "../constants/action";
//export const ADD_MESSAGE = "ADD_MESSAGE";

/*export const sendMessage = (message, username) => {
  return (dispatch, getState) => {
    const username = getState().settings.username;
    const action = { type: ADD_MESSAGE, message, username };
    //websocket.send(JSON.stringify(action));

    return dispatch(action);
  };
};
*/
export const sendMessage = (message, username) => {
  console.log("msg/action/add")
  return {
    type: ADD_MESSAGE,
    message,
    username,
  };
};




export const deleteMessage = index => {
  console.log("msg/action/supp")
  return {
    type: SUPP_MESSAGE,
    index
  };
};

// yarn add websocket.io

//export const addMessage =(message, username)=>{return{    type:'ADD_MESSAGE',    message,    username,}}
