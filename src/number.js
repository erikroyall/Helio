  
  // --------------------------------------------------
  // Number Utility functions
  // --------------------------------------------------

  Helio.times = function times (n, fn, thiss, params) {
    var _i = 0;

    for (; _i < n; _i += 1) {
      fn.apply(thiss, params);
    }
  };