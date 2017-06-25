import {GET_USER_INFO} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userId:
        username:
        profilePic:
        email: 
      }
      break;
  }
}

{
  type: AUTH_USER,
  payload: currentUser
}
)