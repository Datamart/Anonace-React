/**
 * @fileoverview Simple implementation of JSONP.
 *
 * @see http://google.github.io/styleguide/javascriptguide.xml
 * @see http://developers.google.com/closure/compiler/docs/js-for-compiler
 * @see https://en.wikipedia.org/wiki/JSONP
 */


/**
 * Performs JSONP request.
 * @param {string} url The URL to which to send the request.
 * @param {!Function} callback The callback function.
 * @see https://github.com/Datamart/Glize/blob/master/src/net/JSONP.js
 */
export default (url, callback) => {
  const key = 'cb' + ~~(Math.random() * 1e9);
  window[key] = function(data) {
    delete window[key];
    document.body.removeChild(script);
    callback(data);
  };

  const script = document.createElement('SCRIPT');
  script.src = url + (~url.indexOf('?') ? '&' : '?') + 'jsonp=' + key;
  document.body.appendChild(script);
};
