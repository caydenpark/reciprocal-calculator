function calculate() {
    let percentageChangeInput = document.getElementById('a') as HTMLInputElement;
    let percentageChange: number = parseFloat(percentageChangeInput.value);
    let percentageChangeReciprocal = ((-percentageChange) / (1 + percentageChange));

    let reciprocalInput = document.getElementById('b') as HTMLInputElement;
    reciprocalInput.value = percentageChangeReciprocal.toFixed(2).toString();
}

const elementA = document.getElementById('a');
if (elementA) {
    elementA.addEventListener('input', calculate);
}
