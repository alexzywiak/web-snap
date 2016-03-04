import axios from 'axios';

export const GET_USERS = 'GET_USERS';

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
    type: GET_USERS,
    payload: request
  };
};