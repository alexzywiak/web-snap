import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const NEW_MESSAGE = 'NEW_MESSAGE';

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

export const newMessage = (data) => {

  // const url = `${ROOT_URL}/login?username=${data.username}&password=${data.password}`;
  // const request = axios.get(url, {
  //   headers: {
  //     'X-Parse-Application-Id': API_KEY,
  //     'Content-Type': 'application/json'
  //   }
  // });

  console.log(data);

  return {
    type: NEW_MESSAGE,
    payload: data
  };
};
