describe(".each()", function () {
  it("should fail silently when passed with empty array", function() {
    expect(Helio.each([], function (e) {})).toEqual(void 0);
  });
  it("should handle one element arrays", function () {
    var arr = ["one"]
      , val = "";

    Helio.each(["one"], function (e) {
      val += e;
    });

    expect(val, arr[0]);
  });
  it("should handle multiple elements", function() {
    var val = "";

    Helio.each(["helio", "wald"], function (e) {
      val += e.toUpperCase();
    });

    expect(val).toEqual("HELIOWALD");
  });
});