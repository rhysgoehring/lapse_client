import {AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: '',
        authenticated: true,
        userId: action.payload.id,
        username: action.payload.username,
        profilePic: action.payload.profile_pic,
        email: action.payload.email
      };
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
        userId: null,
        username: null,
        profilePic: null,
        email: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };
  }

  return state;
}