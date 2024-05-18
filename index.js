var slider = document.getElementById('slider');
var output = document.getElementById('a');
output.innerHTML = slider.value;
function calculate() {
    var percentageChangeInput = document.getElementById('a');
    var percentageChange = parseFloat(percentageChangeInput.value);
    var percentageChangeOutput = document.getElementById('b');
    if (percentageChange === -100) {
        percentageChangeOutput.value = 'FREE';
    }
    else {
        var percentageChangeReciprocal = ((-(percentageChange / 100)) / (1 + (percentageChange / 100))) * 100;
        if (!['', '-', '%', '-%'].includes(percentageChangeInput.value)) {
            if (percentageChangeReciprocal > 0) {
                percentageChangeOutput.value = '+' + percentageChangeReciprocal.toFixed(0).toString() + '%';
            }
            else {
                percentageChangeOutput.value = percentageChangeReciprocal.toFixed(0).toString() + '%';
            }
        }
        else {
            percentageChangeOutput.value = '';
        }
    }
}
var inputA = document.getElementById('a');
if (inputA) {
    inputA.addEventListener('input', function () {
        // Parse the value of inputA as a float
        var floatValue = parseFloat(inputA.value.replace('%', '')) || 0;
        // Convert the float value back to a string and assign it to the slider value
        slider.value = floatValue.toString();
        calculate(); // Recalculate based on the new slider value
    });
}
function addPercentSign(event) {
    // Check if the key pressed is the "delete" button (keycode 46)
    if (!['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', '-'].includes(event.key)) {
        var elementA_1 = document.getElementById('a');
        var elementAValue = elementA_1.value.replace(/[+%]/g, '');
        var elementANumber = parseFloat(elementA_1.value);
        if (elementANumber > 0) {
            elementA_1.value = '-' + elementAValue + '%';
        }
        else {
            elementA_1.value = elementAValue + '%';
        }
        // Move the cursor to appear before the percent sign
        elementA_1.setSelectionRange(elementA_1.value.length - 1, elementA_1.value.length - 1);
    }
}
var elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('keyup', addPercentSign);
    elementA.addEventListener('input', calculate);
}
function clear() {
    var percentageChangeInput = document.getElementById('a');
    var percentageChangeOutput = document.getElementById('b');
    percentageChangeInput.value = '';
    percentageChangeOutput.value = '';
    slider.value = '0';
}
var clearButton = document.getElementById('clearButton');
if (clearButton) {
    clearButton.addEventListener('click', clear);
}
slider.oninput = function () {
    output.value = this.value + '%';
    calculate();
};
