module.exports = function solveEquation(equation) {
  // your implementation
  var abc = equation.replace(/\s/g, '').match(/\-?\d+/g);
  var a = abc[0];
  var b = abc[2];
  var c = abc[3];
  var d = Math.pow(b, 2) - (4 * a * c);
  var result;
  if (d > 0) {
    var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    result = [x1, x2];
    result.sort((a,b) => a - b);
    return result;
  } else if (d = 0) {
    result = -b / 2 * a;
    return result;
  } else {
    return null;
  }
}
