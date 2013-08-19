(function (A, M, D) {

  // Asynchronous Module Definition, if available

  /*globals YUI: false, module: false, define: false*/

  if (typeof module !== "undefined" && module.exports) {
    module.exports = D();
  } else if (typeof define === "function" && define.amd) {
    define(D);
  } else if (typeof YUI === "function") {
    YUI.add(A, D());
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
  var Helio = function Helio (o) {
    if (typeof o === "string") {
      return HelioString(o);
    } else if (Object.prototype.toString.call(o) === "[object Array]") {
      return HelioArray(o);
    } else if (typeof o === "number") {
      return HelioNumber(o);
    } else {
      return HelioObject(o);
    }

    return false;
  };