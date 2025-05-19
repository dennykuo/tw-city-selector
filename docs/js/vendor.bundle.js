/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/vendor.js":
/*!***************************!*\
  !*** ./docs/js/vendor.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find package 'babel-preset-es2015' imported from /Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/babel-virtual-resolve-base.js\\n    at __node_internal_ (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:225:9)\\n    at new NodeError (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:195:5)\\n    at packageResolve (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:899:9)\\n    at moduleResolve (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:939:18)\\n    at defaultResolve (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1017:15)\\n    at resolve (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:1030:12)\\n    at tryImportMetaResolve (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/files/plugins.js:149:45)\\n    at resolveStandardizedNameForImport (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/files/plugins.js:174:19)\\n    at resolveStandardizedName (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/files/plugins.js:186:22)\\n    at loadPreset (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/files/plugins.js:68:7)\\n    at loadPreset.next (<anonymous>)\\n    at createDescriptor (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-descriptors.js:140:16)\\n    at createDescriptor.next (<anonymous>)\\n    at step (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:261:32)\\n    at evaluateAsync (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:291:5)\\n    at /Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:44:11\\n    at Array.forEach (<anonymous>)\\n    at Function.async (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:43:15)\\n    at Function.all (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:216:13)\\n    at Generator.next (<anonymous>)\\n    at createDescriptors (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-descriptors.js:102:41)\\n    at createDescriptors.next (<anonymous>)\\n    at createPresetDescriptors (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-descriptors.js:96:17)\\n    at createPresetDescriptors.next (<anonymous>)\\n    at /Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-descriptors.js:57:32\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/gensync-utils/async.js:21:3)\\n    at Generator.next (<anonymous>)\\n    at step (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:269:25)\\n    at evaluateAsync (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:291:5)\\n    at Function.errback (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:113:7)\\n    at errback (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/gensync-utils/async.js:65:18)\\n    at async (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:188:17)\\n    at onFirstPause (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:216:13)\\n    at Generator.next (<anonymous>)\\n    at cachedFunction (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/caching.js:52:46)\\n    at cachedFunction.next (<anonymous>)\\n    at mergeChainOpts (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-chain.js:350:34)\\n    at mergeChainOpts.next (<anonymous>)\\n    at chainWalker (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-chain.js:316:14)\\n    at chainWalker.next (<anonymous>)\\n    at buildRootChain (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/config-chain.js:56:36)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/partial.js:72:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at loadPartialConfig (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/partial.js:115:25)\\n    at loadPartialConfig.next (<anonymous>)\\n    at step (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:269:25)\\n    at evaluateAsync (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:291:5)\\n    at /Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:93:9\\n    at new Promise (<anonymous>)\\n    at async (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/gensync/index.js:92:14)\\n    at stopHiding - secret - don't use this - v1 (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/errors/rewrite-stack-trace.js:47:12)\\n    at loadPartialConfigAsync (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/@babel/core/lib/config/index.js:34:85)\\n    at Object.<anonymous> (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:133:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:4:194)\\n    at /Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:4:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:4:97)\\n    at Object._loader (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:231:18)\\n    at Object.loader (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:48:18)\\n    at Object.<anonymous> (/Users/denny/Dropbox/12-套件及腳手架/Frontend/tw-city-selector/node_modules/babel-loader/lib/index.js:44:12)\");\n\n//# sourceURL=webpack:///./docs/js/vendor.js?");

/***/ })

/******/ });