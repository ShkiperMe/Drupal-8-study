export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export function selectLanguage(language) {
  return {
    type: SELECT_LANGUAGE,
    language
  };
}
