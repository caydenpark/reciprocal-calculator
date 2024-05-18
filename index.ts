var slider = document.getElementById('slider') as HTMLInputElement;
var output = document.getElementById('a') as HTMLInputElement;
output.innerHTML = slider.value;

function calculate() {
    let percentageChangeInput = document.getElementById('a') as HTMLInputElement;
    let percentageChange: number = parseFloat(percentageChangeInput.value);
    
    let percentageChangeOutput = document.getElementById('b') as HTMLInputElement;
    
    if (percentageChange === -100) {
        percentageChangeOutput.value = 'FREE'; 
    } else {
        let percentageChangeReciprocal = ((-(percentageChange / 100)) / (1 + (percentageChange / 100))) * 100;
        if (!['', '-', '%', '-%'].includes(percentageChangeInput.value)) {
            if (percentageChangeReciprocal > 0) {
                // Add commas after the first digit for numbers 1000 or greater
                let formattedValue = percentageChangeReciprocal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                percentageChangeOutput.value = '+' + formattedValue + '%';
            } else {
                let formattedValue = percentageChangeReciprocal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                percentageChangeOutput.value = formattedValue + '%';
            }
        } else { percentageChangeOutput.value = ''; }
    }
}

const inputA = document.getElementById('a') as HTMLInputElement;

if (inputA) {
    inputA.addEventListener('input', function() {
        // Parse the value of inputA as a float
        const floatValue = parseFloat(inputA.value.replace('%', '')) || 0;
        // Convert the float value back to a string and assign it to the slider value
        slider.value = floatValue.toString();
        calculate(); // Recalculate based on the new slider value
    });
}

function addPercentSign(event: KeyboardEvent) {
    // Check if the key pressed is the "delete" button (keycode 46)
    if (!['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', '-'].includes(event.key)) {
        let elementA = document.getElementById('a') as HTMLInputElement;
        let elementAValue = elementA.value.replace(/[+%]/g, '');
        let elementANumber = parseFloat(elementA.value);
        if (elementANumber > 0) {
            elementA.value = '-' + elementAValue + '%';
        } else {elementA.value = elementAValue + '%';}
        
        // Move the cursor to appear before the percent sign
        elementA.setSelectionRange(elementA.value.length - 1, elementA.value.length - 1);
    }
}

const elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('keyup', addPercentSign);
    elementA.addEventListener('input', calculate);
}

function clear() {
    let percentageChangeInput = document.getElementById('a') as HTMLInputElement;
    let percentageChangeOutput = document.getElementById('b') as HTMLInputElement;
    percentageChangeInput.value = '';
    percentageChangeOutput.value = '';
    slider.value = '0';
}

const clearButton = document.getElementById('clearButton');
if (clearButton) {
    clearButton.addEventListener('click', clear);
}


slider.oninput = function() {
    output.value = (this as HTMLInputElement).value + '%';
    calculate();
}