import { twoDecimals } from "../utils/conversions.utils";

test("rounds to 2 decimal places when given more as input", () => {
  const length = twoDecimals(1.1234).length;

  expect(length).toBe(4);
});

// test.todo("should return type string");

// test.todo("should match expected rounded value");

// test.todo("should round to 2 decimal places");
