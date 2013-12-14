/**
 * Return the top-level object for the current
 * platform.
 *
 *  - Node.js: `global`
 *  - Browsers: `window`
 *  - Titanium + Alloy: `Alloy.Globals`
 *  - Titanium  `Ti.App`
 *
 * @returns {Object}
 * @api public
 */

module.exports = function() {
  if (typeof global !== 'undefined') {
    return global;
  } else if (typeof window !== 'undefined') {
    return window;
  } else if (typeof Alloy !== 'undefined' && typeof Alloy.Globals !== 'undefined') {
    return Alloy.Globals;
  } else if (typeof Ti !== 'undefined' && typeof Ti.App !== 'undefined') {
    return Ti.App;
  }
};
