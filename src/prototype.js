    
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