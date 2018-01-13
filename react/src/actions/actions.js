export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const LOAD_LANGUAGES = 'LOAD_LANGUAGES';
export const RECEIVE_LANGUAGES = 'RECEIVE_LANGUAGES';

export function selectLanguage(language) {
  return {
    type: SELECT_LANGUAGE,
    language
  };
}

export function preloadLanguages() {
  return {
    type: LOAD_LANGUAGES
  };
}
