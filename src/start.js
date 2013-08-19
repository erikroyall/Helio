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