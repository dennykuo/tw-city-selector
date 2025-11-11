/**
 * Polyfills for legacy browsers (IE 11)
 *
 * 注意：IE11 已於 2022 年停止支援
 * 如果專案不再需要支援 IE 11，可以不呼叫此函數
 *
 * 使用方式（ES6 Module）：
 * import installPolyfills from './polyfills';
 * installPolyfills(); // 需要時才執行
 */

/**
 * 安裝 polyfills
 * @returns {void}
 */
export default function installPolyfills() {
  if (! String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';

      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }

      if (start === undefined) {
        start = 0;
      }

      return this.indexOf(search, start) !== -1;
    };
  }
}