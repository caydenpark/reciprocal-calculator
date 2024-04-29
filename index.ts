function calculate() {
    let percentageChangeInput = document.getElementById('a') as HTMLInputElement;
    let percentageChange: number = parseFloat(percentageChangeInput.value);
    let percentageChangeReciprocal = ((-(percentageChange / 100)) / (1 + (percentageChange / 100))) * 100;

    let reciprocalInput = document.getElementById('b') as HTMLInputElement;
    if (percentageChangeInput.value !== '' && percentageChangeInput.value !== '-') {
        reciprocalInput.value = percentageChangeReciprocal.toFixed(0).toString() + '%';
    } else { reciprocalInput.value = ''; }
}

function addPercentSign(event: KeyboardEvent) {
    // Check if the key pressed is the "delete" button (keycode 46)
    if (event.key !== 'Delete' && event.key !== 'Backspace') {
        let elementA = document.getElementById('a') as HTMLInputElement;
        let elementAValue = elementA.value.replace(/%/g, '');
        elementA.value = elementAValue + '%';
    }
}

const elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('keyup', addPercentSign);
    elementA.addEventListener('input', calculate);
}
