// Testing for Multiplication
test("check for multiplication", () => {
  expect(4 * 5).toBe(20);
});

// Testing for Object
test("check for object", () => {
  const obj = { name: "harsh" };
  obj.city = "indore";
  expect(obj).toEqual({ name: "harsh", city: "indore" });
});

// Adding two positive numbers
test("check for positive number is not zero", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

// Checking for null
test("checking for null", () => {
  const a = null;
  expect(a).toBeNull();
  expect(a).toBeDefined();
  expect(a).not.toBeUndefined();
  expect(a).not.toBeTruthy();
  expect(a).toBeFalsy();
});

// Checking for decimal point
test("checking for decimal points", () => {
  expect(1.12 + 3.14).toBeCloseTo(4.26);
});

// Checking for String
test("Checking for String", () => {
  expect("I am Harsh Kalmegh").toMatch(/Harsh/);
});
