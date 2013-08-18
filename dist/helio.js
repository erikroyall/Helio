// ========================= 
// Helio - 0.0.2
// ========================= 
// 2013-08-18
// Project started before 
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

  var Helio = {};
  
  // --------------------------------------------------
  // Array Utility functions
  // --------------------------------------------------

  /**
   * Executes a function for each element of an array
   * 
   * @for Helio
   * @method each
   * @param {Array} arr Array to iterate
   * @param {Function} fn Function to execute on each element of arr
   * @param {Any} thiss this object of the called function
   * @return {Void}
   * @example
   * Hilo.each(["hilo", "wald"], function (e) {
   *   somevar += e.toUpperCase();
   * });
   * @since 0.0.1
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

  return Helio;
}));
