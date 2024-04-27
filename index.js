// function greeter(person: string) {
//   return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.textContent = greeter(user);
function calculate() {
    var percentageChangeInput = document.getElementById('a');
    var percentageChange = parseFloat(percentageChangeInput.value);
    var percentageChangeReciprocal = ((-percentageChange) / (1 + percentageChange));
    var reciprocalInput = document.getElementById('b');
    reciprocalInput.value = percentageChangeReciprocal.toFixed(2).toString();
}
var elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('input', calculate);
}
