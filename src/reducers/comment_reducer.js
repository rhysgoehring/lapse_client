import {GET_COMMENTS} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...action.payload
      }
  }
  return state;
}