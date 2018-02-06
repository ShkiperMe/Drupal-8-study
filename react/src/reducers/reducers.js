import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'
import {SELECT_LANGUAGE, RECEIVE_REPOS, RECEIVE_LANGUAGES} from '../actions/actions';

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
      return action.data;
    default:
      return state;
  }
}

function loadedLanguages(state = [], action) {
  switch (action.type) {
    case RECEIVE_LANGUAGES:
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loadedRepos,
  selectedLanguage,
  loadedLanguages,
  modal
});

export default rootReducer;