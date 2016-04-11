import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      // do not to an Array.push -- must not mutate state in reducer, must return NEW instance of state
      // below is ES6 sugar -- the ...state adds former array items and flattens
      return [ action.payload.data, ...state ];
  }
  return state;
}