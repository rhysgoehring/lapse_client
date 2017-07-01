import {GET_COMMENTS, POST_COMMENT} from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return _.mapKeys(action.payload, 'id')
      
      case POST_COMMENT:
        return {...state, ...action.payload}
  }
  return state;
}