import fetch from 'isomorphic-fetch';
import { LOAD_LANGUAGES, RECEIVE_LANGUAGES } from '../actions/actions';

export const loadLanguages = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === LOAD_LANGUAGES) {
    fetch('/app/repositories/languages/')
      .then(response => response.json()
      )
      .then(data => {
        next({
          type: RECEIVE_LANGUAGES,
          data
        })
      })
  }

  return next(action)
}