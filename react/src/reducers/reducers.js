import { combineReducers } from 'redux';
import { SELECT_LANGUAGE, RECEIVE_REPOS } from '../actions/actions';

function selectedLanguage(state = 'All', action) {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}

function loadedRepos(state = [], action) {
  switch (action.type) {
    case RECEIVE_REPOS:
      return action.repos;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loadedRepos,
  selectedLanguage
});

export default rootReducer;