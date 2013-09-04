// ========================= 
// Helio - v0.0.8
// ========================= 
// 2013-08-22
// Project started before 4 days
// http://erikroyall.github.com/helio/
// Copyright (c) 2013 Erik Royall
// Licensed under  (see LICENSE-MIT) 

(function (A, M, D) {

  // Asynchronous Module Definition, if available

  /*globals YUI: false, module: false, define: false*/

  if (typeof module !== "undefined" && module.exports) {
    module.exports = D.call(M);
  } else if (typeof define === "function" && define.amd) {
    define(D);
  } else if (typeof YUI === "function") {
    YUI.add(A, D.call(M));
  } else {
    M[A] = D.call(M);
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
  var Helio = function Helio (o) {
    if (typeof o === "string") {
      return new HelioString(o);
    } else if (Object.prototype.toString.call(o) === "[object Array]") {
      return new HelioArray(o);
    } else if (typeof o === "number") {
      return new HelioNumber(o);
    } else {
      return new HelioObject(o);
    }

    return false;
  };
  
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
  } : function each (arr, fn, thiss) {
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
  function map (arr, fn, thiss) {
    return Array.prototype.map.call(arr, fn, thiss);
  } : function map (arr, fn, thiss) {
    var _i, _l, results;

    for (_i = 0, _l = arr.length; _i < _l; _l += 1) {
      results.push(fn.call(thiss, arr[_i], arr));
    }
    
    return results;
  };

  /**
   * Return an array containing only a certain key 
   * from an array of objects
   * 
   * @for Helio
   * @method pluck
   * @param {Array} arr Array to pluck from
   * @param {String} key The key to pluck
   * @return {Array} The plucked array
   * @example
   * Helio.pluck([
   *   {name:"Erik Royall", age: 14},
   *   {name:"John Doe", age: 30},
   *   {name:"Jane Doe", age: 27}
   * ], "name"); // ["Erik Royall", "John Doe", "Jane Doe"]
   * @since 0.0.9
   */
  Helio.pluck = function pluck (arr, key) {
    return Helio.map(arr, function (el) {
      return el[key];
    });
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
  
  // --------------------------------------------------
  // Number Utility functions
  // --------------------------------------------------

  Helio.times = function times (n, fn, thiss, params) {
    var _i = 0;

    for (; _i < n; _i += 1) {
      fn.apply(thiss, params);
    }
  };
    
  // --------------------------------------------------
  // Helio Internal Class' wrappers
  // --------------------------------------------------

  function HelioObject (obj) {
    this.o = obj;
  }

  function HelioString (str) {
    this.s = str;
  }

  function HelioArray (arr) {
    this.a = arr;
  }

  function HelioNumber (number) {
    this.n = number;
  }
    
  // --------------------------------------------------
  // Prototypes of internal objects
  // --------------------------------------------------

  Helio.extend(HelioObject.prototype, {
    isArray: false,
    isString: false,
    isNumber: false,
    isBoolean: false,
    isNaN: false,
    isObject: true,

    extend: function (ext) {
      return Helio.extend.call(this, this.o, ext);
    }
  });

  Helio.extend(HelioString.prototype, {
    isArray: false,
    isString: true,
    isNumber: false,
    isBoolean: false,
    isNaN: false,
    isObject: false,

    isEmpty: function () {
      return this.s.length > 0;
    },

    contains: function (str) {
      return this.s.indexOf(str) > -1;
    }
  });

  Helio.extend(HelioArray.prototype, {
    isArray: true,
    isString: false,
    isNumber: false,
    isBoolean: false,
    isNaN: false,
    isObject: false,

    each: function (fn) {
      return Helio.each(this.a, fn);
    },

    map: function (fn) {
      return Helio.map(this.a, fn);
    }
  });

  Helio.extend(HelioNumber.prototype, {
    isArray: false,
    isString: false,
    isNumber: true,
    isBoolean: false,
    isNaN: false,
    isObject: false,

    times: function (fn) {
      Helio.times(this.n, fn);
    }
  });

  this._ = Helio;

  return Helio;
}));
