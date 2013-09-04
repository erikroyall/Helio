  
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