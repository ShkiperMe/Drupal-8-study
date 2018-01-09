import polyfillsRequired from 'lib/polyfillsRequired';

// Initialize the app.
const init = () => (
  import('index')
);

// Load and append JS to the DOM.
const loadScript = (src, done) => {
  const js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done && done();
  };
  js.onerror = function() {
    done && done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
};

// If polyfills are required, load them before initializing the app.
if (polyfillsRequired()) {
  loadScript(drupalSettings.react_app.polyfillURL, init);
}
else {
  init();
}
