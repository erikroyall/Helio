    
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