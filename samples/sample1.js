function hello(x, y, mode) {
  console.log("x :", x);
  console.log("y :", y);
  console.log("mode :", mode);
  let result;
  if (mode === "multiplication") {
    result = x * y;
  } else {
    result = x + y;
  }
  return result;
}
