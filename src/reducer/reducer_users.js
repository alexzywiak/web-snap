import {GET_USERS} from '../action/index';

export default (state = [], action) => {
  switch(action.type){
    case GET_USERS:
      return action.payload.data.results;
    default:
      return state;
  }
};