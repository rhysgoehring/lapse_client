import _ from 'lodash';
import {GET_ALL_LAPSES} from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_LAPSES:
      return _.mapKeys(action.payload, 'id');
      
    
      
  }
  return state;
}