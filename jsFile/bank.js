document.getElementById('deposit-btn').addEventListener('click', function name(params) {
    const getDepositInput = inputType('deposit-input');
    if (isNaN(getDepositInput)) {
        alert('Please provide number');
        return;
    }
    const getDepositValue = elementType('deposit-value');
    const sumPreviousAndNewValue =getDepositInput + getDepositValue;
    update('deposit-value', sumPreviousAndNewValue);

    const getBalance = elementType('balance-value');
    const sumPreviousValueAndDepositInputValue = getBalance + getDepositInput;
    update('balance-value',sumPreviousValueAndDepositInputValue);
})