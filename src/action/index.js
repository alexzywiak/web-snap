import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const GET_USER_SESSION = 'GET_USER_SESSION';
export const GET_USER_MESSAGE_LIST = 'GET_USER_MESSAGE_LIST';
export const GET_MESSAGE = 'GET_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPLOAD_FILE = 'UPLOAD_FILE';

const ROOT_URL = 'http://localhost:1337/parse';
const API_KEY = 'myid';
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
    type: SIGN_UP,
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
    type: LOG_IN,
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

export const getUser = (userId) => {
  let url = `${ROOT_URL}/users/${userId}`;
  const request = axios.get(url, {
    headers: {
      'X-Parse-Application-Id': API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return {
    type: GET_USER,
    payload: request
  };
};

export const uploadFile = (filepath) => {
  const url = `${ROOT_URL}/files/msg.jpg`;
  const options = {
    headers: {
      'Content-Type': 'image/jpeg'
    }
  }

  const request = axios.put(url, filepath, options);

  return {
    type: UPLOAD_FILE,
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

  console.log(data);

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
