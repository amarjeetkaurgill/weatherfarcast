import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      // in ES5, above statement is same as state.concat([action.payload.data]);
  }
    return state;
}
