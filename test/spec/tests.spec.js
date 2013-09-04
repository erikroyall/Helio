var _ = Helio;

describe(".each()", function () {
  it("should fail silently when passed with empty array", function() {
    expect(_.each([], function (e) {})).toEqual(void 0);
  });
  it("should handle one element arrays", function () {
    var arr = ["one"]
      , val = "";

    _.each(["one"], function (e) {
      val += e;
    });

    expect(val, arr[0]);
  });
  it("should handle multiple elements", function() {
    var val = "";

    _.each(["helio", "wald"], function (e) {
      val += e.toUpperCase();
    });

    expect(val).toEqual("HELIOWALD");
  });
});
describe(".pluck()", function() {
  it("it should handle empty arrays", function () {
    expect(_.pluck([], "name")).toEqual([]);
  });
  it("should get the keys of the array", function () {
    var arr = [
      {name:"Erik Royall", age: 14},
      {name:"John Doe", age: 30},
      {name:"Jane Doe", age: 27}
    ];

    expect(_.pluck(arr, "name")).toEqual(["Erik Royall", "John Doe", "Jane Doe"]);
    expect(_.pluck(arr, "age")).toEqual([14, 30, 27]);
  });
});