let calculator = {
  add: function( num1, num2 ) {
    return {n1:num1, n2:num2, r:num1 + num2, op:"add"};
  },
  subtract: function( num1, num2 ) {
    return {n1:num1, n2:num2, r:num1 - num2, op:"sub"};
  },
  multiply: function( num1, num2 ) {
    return {n1:num1, n2:num2, r:num1 * num2, op:"mul"};
  },
  divide: function( num1, num2 ) {
    return {n1:num1, n2:num2, r:num1 / num2, op:"div"};
  }
}

function displayResult(result) {
  if (result.op == "add") {char = "+"}
  if (result.op == "sub") {char = "-"}
  if (result.op == "mul") {char = "x"}
  if (result.op == "div") {char = "/"}

  let elements = document.getElementsByClassName("Paragraphs")
  elements[0].innerHTML = result.n1 + " " + char + " " + result.n2
  elements[1].innerHTML = " = " + result.r


}
