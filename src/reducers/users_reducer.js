import _ from 'lodash';
import {GET_USER_LAPSES} from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_LAPSES:
      return _.mapKeys(action.payload, 'id')
   }
      return state;
}