/**
 * Returns true if polyfills are required for the following functions.
 *
 * @return {boolean}
 */
export default () => (
  typeof fetch === 'undefined' ||
  typeof Promise === 'undefined' ||
  typeof Array.prototype.find === 'undefined' ||
  typeof Object.values === 'undefined'
);
