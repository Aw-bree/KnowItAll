import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FRIEND, RECEIVE_FRIENDS } from '../actions/friend_actions';

// const UsersReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_USER:
//       return { [action.user.id]: action.user }
//     default:
//       return state;
//   }
// }

// MIGHT MAKE FRIENDSREDUCER INSTEAD 

const UsersReducer = (state = { friends: {}, current: {}, friend: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.current = action.user.data
      return newState;
    case RECEIVE_FRIENDS:
      newState.friends = action.friends.data;
      return newState;
    case RECEIVE_FRIEND:
      newState.friend = action.friend.data;
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;