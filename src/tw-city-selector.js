'use strict';

// --------------------
// Module export
// --------------------
export default MyModule; /* use rollup to build */
// module.exports = MyModule; /* use browserify to build */


// --------------------
// Define constructor
// --------------------

import { country, district } from './data.js';

console.log(country);

function MyModule() {
  
  var defaultOptions = {
    // show: true
  };
  
  var options = arguments[0] || {};
  
  // Check options required
  _optionsRequired(options, ['el']);
  // Extend options
  this.options = _extendOptions(defaultOptions, options);
  // init
  this.init();
};


// --------------------
// Public Methods
// --------------------

MyModule.prototype.init = function() {
  _init.call(this);
};

MyModule.prototype.open = function() {
  console.log('Module is opened');
};


// --------------------
// Private Methods
// --------------------

function _init() {
  console.log('Module is init');
  console.log('Options: ', this.options);
} // end

function _optionsRequired() {
  var error = '';
  var options = arguments[0];
  var required = arguments[1];
  
  var length = required.length;
  while (length--) {
    if (! options.hasOwnProperty(required[length]))          
      error += required[length] + ',';
  }
  
  if (error) throw '缺少參數 ' + error;
} // end

function _extendOptions(defaultOptions, options) {
  if (! options || typeof options !== 'object')
    return defaultOptions;
  
  var property;
  for (property in options) {
    defaultOptions[property] = options[property];
  }
  
  return defaultOptions;
} // end
