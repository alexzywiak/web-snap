import axios from 'axios';
import {browserHistory} from 'react-router';

export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const GET_USER_SESSION = 'GET_USER_SESSION';
export const GET_USER_MESSAGE_LIST = 'GET_USER_MESSAGE_LIST';
export const GET_USERS = 'GET_USERS';
export const GET_MESSAGE = 'GET_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const FLASH_MESSAGE = 'FLASH_MESSAGE';

const ROOT_URL = 'http://ziviak.net/web-snap/parse';
const API_KEY = 'supersecretappid';
const HEADERS = {'X-Parse-Application-Id': API_KEY};

export const getUsers = () => {

  const url = `${ROOT_URL}/users`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: GET_USERS,
    payload: request
  };
};

export const signUp = (data) => {

  const url = `${ROOT_URL}/users`;
  const request = axios.post(url, data, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: SET_LOGGED_IN_USER,
    payload: request
  };
};

export const logIn = (data) => {

  const url = `${ROOT_URL}/login?username=${data.username}&password=${data.password}`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: SET_LOGGED_IN_USER,
    payload: request
  };
};

export const logOut = () => {
  window.localStorage.removeItem('session-token');
  browserHistory.push('/web-snap/login');
  return {
    type: SET_LOGGED_IN_USER,
    payload: null
  }
};

export const getUser = (userId) => {
  let url = `${ROOT_URL}/users/${userId}`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: SET_LOGGED_IN_USER,
    payload: request
  };
};

export const getUserSession = (sessionToken) => {
  let url = `${ROOT_URL}/sessions/me`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'X-Parse-Session-Token': sessionToken,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: GET_USER_SESSION,
    payload: request
  };
};


export const uploadFile = (filepath) => {
  const url = `${ROOT_URL}/files/msg.jpg`;
  const options = {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'image/jpeg'
    }
  };

  const request = axios.post(url, filepath[0], options);

  return {
    type: UPLOAD_FILE,
    payload:request
  }
};

export const deleteImage = (filename) => {
  const url = `${ROOT_URL}/files/${filename}`;
  const options = {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'image/jpeg'
    }
  };

  const request = axios.delete(url, options);

  return {
    type: DELETE_FILE,
    payload:request
  }
};

export const getUserMessageList = (username) => {

  const url = `${ROOT_URL}/classes/Message?where={"recipient":"${username}"}`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: GET_USER_MESSAGE_LIST,
    payload: request
  }
};

export const getMessage = (msgId) => {
  const url = `${ROOT_URL}/classes/Message/${msgId}`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: GET_MESSAGE,
    payload: request
  }
};

export const newMessage = (data) => {

  const url = `${ROOT_URL}/classes/Message`;
  const request = axios.post(url, data, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: NEW_MESSAGE,
    payload: request
  };
};

export const deleteMessage = (msgId) => {

  const url = `${ROOT_URL}/classes/Message/${msgId}`;
  const request = axios.delete(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: DELETE_MESSAGE,
    payload: request
  };
};

export const sendFlashMessage = (msg) => {
  return {
    type: FLASH_MESSAGE,
    payload: msg
  }
}
