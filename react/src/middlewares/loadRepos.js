import fetch from 'isomorphic-fetch';
import { SELECT_LANGUAGE, RECEIVE_REPOS } from '../actions/actions';

export const loadRepos = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === SELECT_LANGUAGE) {
    const language = action.language;
    const url = language === 'All' ? '/app/repositories/entity/' : `/app/repositories/entity/${language}`;
    fetch(url)
      .then(response => response.json()
      )
      .then(data => {
        next({
          type: RECEIVE_REPOS,
          data
        })
      })
  }

  return next(action)
}