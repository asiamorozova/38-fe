import { ADD_CASTLE } from '../actions/castlesActions';

export default function reducer(state = [], action){
  switch(action.type) {
    case ADD_CASTLE:
      return [...state, action.payload];
    default: 
      return state;
  }
}
