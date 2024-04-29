function calculate() {
    var percentageChangeInput = document.getElementById('a');
    var percentageChange = parseFloat(percentageChangeInput.value);
    var percentageChangeReciprocal = ((-(percentageChange / 100)) / (1 + (percentageChange / 100))) * 100;
    var reciprocalInput = document.getElementById('b');
    if (percentageChangeInput.value !== '' && percentageChangeInput.value !== '-') {
        reciprocalInput.value = percentageChangeReciprocal.toFixed(0).toString() + '%';
    }
    else {
        reciprocalInput.value = '';
    }
}
function addPercentSign(event) {
    // Check if the key pressed is the "delete" button (keycode 46)
    if (event.key !== 'Delete' && event.key !== 'Backspace') {
        var elementA_1 = document.getElementById('a');
        var elementAValue = elementA_1.value.replace(/%/g, '');
        elementA_1.value = elementAValue + '%';
    }
}
var elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('keyup', addPercentSign);
    elementA.addEventListener('input', calculate);
}
