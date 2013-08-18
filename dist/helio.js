// ========================= 
// Helio - v0.0.3
// ========================= 
// 2013-08-19
// Project started before 1 day 
// http://erikroyall.github.com/helio/
// Copyright (c) 2013 Erik Royall
// Licensed under  (see LICENSE-MIT) 

(function (A, M, D) {

  // Asynchronous Module Definition, if available

  /*globals YUI: false, module: false, define: false*/

  if (typeof module !== "undefined" && module.exports) {
    module.exports = D;
  } else if (typeof define === "function" && define.amd) {
    define(D);
  } else if (typeof YUI === "function") {
    YUI.add(A, D);
  } else {
    M[A] = D();
  }
}("Helio", this, function () {

  "use strict";

  /**
   * The main Helio object
   * 
   * @static
   * @class Helio
   * @since 0.0.1
   */
  var Helio = {};
  
  // --------------------------------------------------
  // Array Utility functions
  // --------------------------------------------------

  /**
   * Executes a function for each element of an array
   * 
   * @for Helio
   * @method each
   * @param {Array} arr Array to act on
   * @param {Function} fn Function to execute on each element of arr
   * @param {Any} thiss this object of the called function
   * @return {Void}
   * @example
   * Helio.each(["Helio", "wald"], function (e) {
   *   somevar += e.toUpperCase();
   * });
   * @since 0.0.2
   */
  Helio.each = Helio.forEach = typeof Array.prototype.forEach === "function" ?
    function each (arr, fn, thiss) {
      Array.prototype.forEach.call(arr, fn, thiss);
    }
  : function each (arr, fn, thiss) {
    var _i, _l;

    for (_i = 0, _l = arr.length; _i < _l; _l += 1) {
      fn.call(thiss, arr[_i], arr);
    }
  };

  /**
   * Executes a function for each element of an array
   * and returns the results of executing it
   * 
   * @for Helio
   * @method map
   * @param {Array} arr Array to act on
   * @param {Function} fn Function to execute on each element of arr
   * @param {Any} thiss this object of the called function
   * @return {Array} The results of execution
   * @example
   * var uppercased = Helio.map(["Helio", "wald"], function (e) {
   *   somevar += e.toUpperCase();
   * });
   * @since 0.0.3
   */
  Helio.map = typeof Array.prototype.map === "function" ?
    function each (arr, fn, thiss) {
      Array.prototype.map.call(arr, fn, thiss);
    }
  : function map (arr, fn, thiss) {
    var _i, _l, results;

    for (_i = 0, _l = arr.length; _i < _l; _l += 1) {
      results.push(fn.call(thiss, arr[_i], arr));
    }
    
    return results;
  };
    
  // --------------------------------------------------
  // Object Utility functions
  // --------------------------------------------------

  /**
   * Extends an Object with properties of another object
   * 
   * @for Helio
   * @method extend
   * @param {Object} obj Object to extend
   * @param {Object} ext Extension object
   * @return {Object} The extended object
   * @example
   * Helio.extend(someObject, {name:"Erik"});
   * @since 0.0.4
   */
  Helio.extend = function extend (obj, ext) {
    var _i;

    for (_i in ext) {
      if (ext.hasOwnProperty(_i)) {
        obj[_i] = ext[_i];
      }
    }

    return obj;
  };

  return Helio;
}));
