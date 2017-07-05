import _ from 'lodash';
import {GET_ALL_LAPSES, GET_LAPSE} from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_LAPSES:
      return _.mapKeys(action.payload, 'id')
    case GET_LAPSE:
      return {...state, [action.payload.id]: action.payload}
    }
      return state;
}