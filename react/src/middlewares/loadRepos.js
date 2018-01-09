import fetch from 'isomorphic-fetch';
import { SELECT_LANGUAGE, RECEIVE_REPOS } from '../actions/actions';

export const loadRepos = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === SELECT_LANGUAGE) {
    const language = action.language
    fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
      .then(response => response.json()
      )
      .then(data => {
        const repos = data.items
        next({
          type: RECEIVE_REPOS,
          repos
        })
      })
  }

  return next(action)
}