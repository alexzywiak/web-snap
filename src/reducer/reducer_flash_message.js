import {FLASH_MESSAGE} from '../action/index';

const initialState = {
  message: null,
  className: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case FLASH_MESSAGE:
      return action.payload ? action.payload : initialState;
    default:
      return state;
  }
};