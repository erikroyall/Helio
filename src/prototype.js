    
  // --------------------------------------------------
  // Prototypes of internal objects
  // --------------------------------------------------

  extend(HelioObject.prototype, {
    isArray: false,
    isString: false,
    isNumber: false,
    isBoolean: false,
    isNaN: false,
    isObject: true,

    extend: function (ext) {
      return extend.call(this, this.o, ext);
    }
  });

  extend(HelioString.prototype, {
    isEmpty: function () {
      return this.s.length > 0;
    },

    contains: function (str) {
      
    }
  });

  extend(HelioArray.prototype, {});

  extend(HelioNumber.prototype, {});