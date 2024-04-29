function calculate() {
    let percentageChangeInput = document.getElementById('a') as HTMLInputElement;
    let percentageChange: number = parseFloat(percentageChangeInput.value);
    let percentageChangeReciprocal = ((-(percentageChange / 100)) / (1 + (percentageChange / 100))) * 100;

    let percentageChangeOutput = document.getElementById('b') as HTMLInputElement;
    if (!['', '-', '%', '-%'].includes(percentageChangeInput.value)) {
        if (percentageChangeReciprocal > 0) {
            percentageChangeOutput.value = '+' + percentageChangeReciprocal.toFixed(0).toString() + '%';
        } else {percentageChangeOutput.value = percentageChangeReciprocal.toFixed(0).toString() + '%';}
    } else { percentageChangeOutput.value = ''; }
}

function addPercentSign(event: KeyboardEvent) {
    // Check if the key pressed is the "delete" button (keycode 46)
    if (!['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', '-'].includes(event.key)) {
        let elementA = document.getElementById('a') as HTMLInputElement;
        let elementAValue = elementA.value.replace(/%/g, '');
        elementA.value = elementAValue + '%';

        // Move the cursor to appear before the percent sign
        elementA.setSelectionRange(elementA.value.length - 1, elementA.value.length - 1);
    }
}

const elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('keyup', addPercentSign);
    elementA.addEventListener('input', calculate);
}
