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
