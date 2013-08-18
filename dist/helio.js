// ========================= 
// Helio - 0.0.1-alpha.0
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
  return Helio;
}));
