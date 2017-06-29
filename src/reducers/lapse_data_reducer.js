import _ from 'lodash';
import {GET_ALL_LAPSES, GET_ALL_COMMENTS} from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_LAPSES:
      return {
        lapses: _.mapKeys(action.payload, 'id')
      };
    case GET_ALL_COMMENTS:
        return {...state,
         comments: _.mapKeys(action.payload, 'id')
        }
    }
        return state;
}