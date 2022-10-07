// const { default: test } = require("node:test");
const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObjectToArray()", () => {
  test("maps values to array using callback", () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (key, value) => {
      return value + 10;
    });

    expect(result).toEqual([40, 75]);
  });

  test("callback gets called for each value", () => {
    const mockCallback = jest.fn();
    const result = mapObjectToArray({ age: 30, height: 65 }, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
  });
});
